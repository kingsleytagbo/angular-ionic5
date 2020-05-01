import { Action } from '@ngrx/store';
import { Authentication } from '../../models/authentication';

export enum ActionTypes{
    GET_REQUEST = '[Authentication] Get Request',
    GET_FAILURE = '[Authentication] Get Failure',
    GET_SUCCESS = '[Authentication] Get Success'
};

export class GetRequestAction implements Action{
    readonly type = ActionTypes.GET_REQUEST
}

export class GetFailureAction implements Action{
    readonly type = ActionTypes.GET_FAILURE
}

export class GetSuccessAction implements Action{
    readonly type = ActionTypes.GET_SUCCESS
}