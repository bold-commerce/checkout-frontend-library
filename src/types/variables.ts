export interface IEnvironment {
    type: string;
    url?: string;
    path?: string;
}

export interface IAuth {
    shopIdentifier: string;
    publicOrderId: string;
    csrfToken: string;
    jwtToken: string;
}
