import {IApiResponse} from 'src/types/apiInterfaces';

export interface IFetchError extends Error {
    status: number;
    statusText: string | undefined;
    body: string | IApiResponse | null | undefined;
    metaData: Record<string, unknown> | null | undefined;
}

interface IFetchErrorConstructor extends ErrorConstructor {
    new(status: number, msg: string, statusText?: string, body?: string | IApiResponse | null): IFetchError;
    (status: number, msg: string, statusText?: string, body?: string | IApiResponse | null): IFetchError;
}

declare let IFetchError: IFetchErrorConstructor;

export interface IErrorFormat {
    status: number;
    message: string;
}

export interface IApiErrors {
    general: IErrorFormat;
    noCsrf: IErrorFormat;
    noAppState: IErrorFormat;
    noResData: IErrorFormat;
    emptyAppState: IErrorFormat;
    emptyResData: IErrorFormat;
    noFieldInResponse: IErrorFormat;
    emptyFieldInResponse: IErrorFormat;
    errorsInResponse: IErrorFormat;
    emptyKeysToCheck: IErrorFormat;
}

export interface IGeneralApiResponseParsingErrorType {
    noField: string;
    emptyField: string;
}
