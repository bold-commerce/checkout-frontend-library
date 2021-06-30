import {IFetchError} from './errorInterfaces';

export interface IApiResponse {
    data: ISessionStartApi
}

export interface IApiReturnObject {
    success: boolean
    error: null | IFetchError 
    response: null | IApiResponse 
}

export interface IFetchCallback extends Function {
    (obj: IApiReturnObject): void;
}

export interface ISessionStartApi {
    csrf_token: string
}