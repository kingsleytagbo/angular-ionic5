import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as AuthenticationActions from './authentication-action';
import { UserData } from '../../providers/user-data';
import { Observable, of as observableof, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ActionTypes } from './authentication-action';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { Authentication } from '../../models/authentication';
import { switchAll } from 'rxjs/internal/operators/switchAll';

@Injectable()
export class AuthenticationStoreEffects {
    constructor(
        private actions$: Actions,
        private userService: UserData
    ) { }

    /*
    @Effect()
    LoginEffect$: Observable<Action> = this.actions$.pipe(
        ofType<AuthenticationActions.GetRequestAction>(AuthenticationActions.ActionTypes.GET_REQUEST),
        switchMap(action =>
            from(this.userService.login("", "").pipe(
                map{
                    data => return new AuthenticationActions.GetSuccessAction({ data: !data ? actions.payload.data : data });
                    }),
                catchError()
            )
        )
    )
    */

    @Effect() postLogin2$ = this.actions$.pipe(
        ofType<AuthenticationActions.GetRequestAction>(AuthenticationActions.ActionTypes.GET_REQUEST),
        map(action => action),
        switchMap(action => {
            console.log({ action: action, payload: action.payload});
            return this.userService.loginObservable(action.payload)
                .pipe(
                    

                );
        })

    );

    /*
    @Effect()
    postLogin$: Observable<Action> = this.actions$.pipe(
        ofType<AuthenticationActions.GetRequestAction>(AuthenticationActions.ActionTypes.GET_REQUEST),
        map((action: AuthenticationActions.GetRequestAction) => action.payload),
      switchMap(payload:Authentication => {
          this.userService.loginObservable(payload)
      })
    );

    @Effect()
    postLogin1$: Observable<Action> = this.actions$.pipe(
        ofType<AuthenticationActions.GetRequestAction>(AuthenticationActions.ActionTypes.GET_REQUEST),
        switchMap(action => {
            this.userService.loginObservable(action.payload)
                .pipe(
                map((data: any) => {
                    return new AuthenticationActions.GetSuccessAction({ data: !data ? action.payload : data });
                }
                ),
                catchError((err: any, caught: any) => {
                    return observableof(new AuthenticationActions.GetFailureAction(err))
                )
                )
        ),
    );
    */

}