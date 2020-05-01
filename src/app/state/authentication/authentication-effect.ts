import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as AuthenticationActions from './authentication-action';
import { UserData } from '../../providers/user-data';
import { Observable, of as observableof, from } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ActionTypes } from './authentication-action';

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

    @Effect()
    searchArticleById$: Observable<Action> = this.actions$.pipe(
        ofType<AuthenticationActions.GetRequestAction>(ActionTypes.GET_REQUEST),
        switchMap((action) => 
        {
            return from (this.userService.login(action.payload))
         } ,
        map(action => action.payload)
        .switchMap(id =>
            from(this.userService.login(""))
                .map(res => new fromActions.GetByIdSuccessAction(res))
        ); 

    );

}