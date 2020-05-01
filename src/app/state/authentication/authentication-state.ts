import { Authentication } from '../../models/authentication';

export interface State{
    actionType:string | null;
    isLoading:boolean;
    data: any;
    error:any;
};

export const initialState:State = {
    actionType:null,
    isLoading: false,
    data:null,
    error:null
};