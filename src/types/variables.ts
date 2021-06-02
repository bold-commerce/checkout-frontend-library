export interface Environment {
    type: string,
    url: string,
    path: string
}

export interface Auth {
    shopIdentifier: string
    publicOrderId: string
    csrfToken: string
    jwtToken: string
}
