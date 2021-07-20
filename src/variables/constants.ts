import {IEnvironmentTypes, IEnvironmentUrls, IApiTypes, IApiReturnObject, IMethods, IApiTypeKeys, IApiErrors} from 'src';

export const environmentTypes: IEnvironmentTypes = {
    production: 'production',
    staging: 'staging',
    local: 'local'
};

export const environmentUrls: IEnvironmentUrls = {
    production: 'https://api.boldcommerce.com',
    staging: 'https://api.staging.boldcommerce.com',
};

export const environmentPath = 'checkout';

export const methods: IMethods = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
};

export const apiTypes: IApiTypes = {
    sessionStart: {
        path: '/session/start',
        method: methods.POST,
        useCsrf: false
    },
    addGuestCustomer: {
        path: '/customer/guest',
        method: methods.POST,
        useCsrf: true,
    },
    validateEmail: {
        path: '/validate_email_address',
        method: methods.GET,
        useCsrf: true,
    },
    setShippingAddress: {
        path: '/addresses/shipping',
        method: methods.POST,
        useCsrf: true
    },
    setBillingAddress: {
        path: '/addresses/billing',
        method: methods.POST,
        useCsrf: true
    },
    validateAddress: {
        path: '/validate_address',
        method: methods.GET,
        useCsrf: true
    },
};

export const apiTypeKeys: IApiTypeKeys = {
    sessionStart: 'sessionStart',
    addGuestCustomer: 'addGuestCustomer',
    validateEmail: 'validateEmail',
    setShippingAddress: 'setShippingAddress',
    setBillingAddress: 'setBillingAddress',
    validateAddress: 'validateAddress',
};

export const baseReturnObject: IApiReturnObject = {
    success: false,
    error: null,
    response: null
};

export const apiErrors: IApiErrors = {
    general: {status: 1000, message: 'General error thrown'},
    noCsrf: {status: 1001, message: 'CSRF Token not found'},
    noAppState: {status: 1002, message: 'Application state not found in response'},
    noResData: {status: 1003, message: 'Data not found in response'},
};
