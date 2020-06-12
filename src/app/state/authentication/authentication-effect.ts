import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as AuthenticationActions from './authentication-action';
import { UserData } from '../../providers/user-data';
import { Observable, of as observableof, from } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ActionTypes } from './authentication-action';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { Authentication } from '../../models/authentication';
import { switchAll } from 'rxjs/internal/operators/switchAll';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';
import { EventService } from '../../services/EventService';

@Injectable()
export class AuthenticationStoreEffects {
    constructor(
        private actions$: Actions,
        private userService: UserData,
        private http: HttpClient,
        private router: Router,
        private events: EventService
    ) { }



    postLogin2$ = this.actions$.pipe(
        ofType<AuthenticationActions.GetRequestAction>(AuthenticationActions.ActionTypes.GET_REQUEST),
        switchMap(action => {
            console.log({ SwitchMap: { action: action, payload: action.payload } });
            return this.userService.loginObservable(action.payload).pipe(
                map((data: any) => {
                    console.log({ map: { data:data, action:action, payload: action.payload } });
                    return new AuthenticationActions.GetSuccessAction({ data: !data ? action.payload : data });
                },                                          
                catchError((err: any, caught: any) => {
                        console.log({ map: { err: err } });
                        return observableof(new AuthenticationActions.GetFailureAction(err));
                    })
                )

            )
        })
    );

    @Effect()
    Authenticate$ = this.actions$
    .pipe(
      // filter out the actions, except `[Customers Page] Get`
      ofType<AuthenticationActions.GetRequestAction>(AuthenticationActions.ActionTypes.GET_REQUEST),
      switchMap((action) =>
        // call the service
        this.userService.loginObservable(action.payload).pipe(
          // return a Success action when everything went OK
          map(data => {
            // console.log({ map: { data:data, action:action, payload: action.payload } });
                  if (data === true) {
                      this.events.publish(AuthenticationActions.GetSuccessAction, data);
                      return new AuthenticationActions.GetSuccessAction({ data: !data ? action.payload : data });
                  }
                  else{
                    return new AuthenticationActions.GetFailureAction(false);
                  }
            },
          // return a Failed action when something went wrong
          catchError(error => {
              console.log({error: error});
              return observableof(new AuthenticationActions.GetFailureAction(error))
            }),
        ),
        tap((action) => 
            { 

            if (action.payload.data === true) {
                this.router.navigateByUrl('/lms');
            }
        }),
      ),
    ));

}