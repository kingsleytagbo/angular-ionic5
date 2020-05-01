import { Authentication } from '../../models/authentication';

export interface AuthenticationState{
    actionType:string | null;
    isLoading:boolean;
    data: any;
    error:any;
};

export const initialAuthenticationState:AuthenticationState = {
    actionType:null,
    isLoading: false,
    data:null,
    error:null
};