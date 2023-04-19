export interface IEnvironmentTypes {
    readonly production: string;
    readonly staging: string;
    readonly local: string;
}

export interface IEnvironmentUrls {
    readonly production: string;
    readonly staging: string;
}

export interface IHttpStatusCode {
    OK: number,
    ACCEPTED: number,
    BAD_REQUEST: number,
    UNAUTHORIZED: number,
    FORBIDDEN: number,
    NOT_FOUND: number,
    UNPROCESSABLE_ENTITY: number,
    INTERNAL_SERVER_ERROR: number,
    SERVICE_UNAVAILABLE: number,
    METHOD_NOT_ALLOWED: number,
    REQUEST_TIMEOUT: number,
    TOO_MANY_REQUEST: number,
    NOT_IMPLEMENTED: number,
    GATEWAY_TIMEOUT: number,
    ORDER_LOCKED: number,
    ORDER_TIMEOUT_LOCK: number
}
