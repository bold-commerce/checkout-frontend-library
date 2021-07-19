import {IEnvironmentTypes, IEnvironmentUrls, IApiTypes, IApiReturnObject, IMethods} from 'src';

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
    validateEmail: {
        path: '/validate_email_address',
        method: methods.GET,
        useCsrf: true,
    },
};

export const baseReturnObject: IApiReturnObject = {
    success: false,
    error: null,
    response: null
};
