import {IEnvironmentTypes, IEnvironmentUrls, IApiTypes, IApiReturnObject, IMethods, IApiTypeKeys} from 'src';

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
    validateAddress: {
        path: '/validate_address',
        method: methods.GET,
        useCsrf: true
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
};

export const apiTypeKeys: IApiTypeKeys = {
    sessionStart: 'sessionStart',
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
