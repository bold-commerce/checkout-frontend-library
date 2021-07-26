import {
    IEnvironmentTypes,
    IEnvironmentUrls,
    IApiTypes,
    IApiReturnObject,
    IMethods,
    IApiTypeKeys,
    IApiErrors,
    IGeneralApiResponseParsingErrorType
} from 'src';

export const environmentTypes: IEnvironmentTypes = {
    production: 'production',
    staging: 'staging',
    local: 'local'
};

export const environmentUrls: IEnvironmentUrls = {
    production: 'https://api.boldcommerce.com',
    staging: 'https://api.staging.boldcommerce.com',
};

export const keysToTestFromResponse = {
    data: 'data',
    applicationState: 'application_state',
};

export const environmentPath = 'checkout';

export const generalApiResponseParsingErrorType: IGeneralApiResponseParsingErrorType = {
    noField: 'noField',
    emptyField: 'emptyField',
};

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
        useCsrf: false,
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
        useCsrf: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]
    },
    getShippingLines: {
        path: '/shipping_lines',
        method: methods.GET,
        useCsrf: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]
    },
    setBillingAddress: {
        path: '/addresses/billing',
        method: methods.POST,
        useCsrf: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]
    },
    validateAddress: {
        path: '/validate_address',
        method: methods.GET,
        useCsrf: true,
    },
    changeShippingLines: {
        path: '/shipping_lines',
        method: methods.POST,
        useCsrf: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]
    },
    setTaxes: {
        path: '/taxes',
        method: methods.POST,
        useCsrf: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]
    },
    addDiscount: {
        path: '/discounts',
        method: methods.POST,
        useCsrf: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]
    },
};

export const apiTypeKeys: IApiTypeKeys = {
    sessionStart: 'sessionStart',
    addGuestCustomer: 'addGuestCustomer',
    validateEmail: 'validateEmail',
    setShippingAddress: 'setShippingAddress',
    setBillingAddress: 'setBillingAddress',
    validateAddress: 'validateAddress',
    getShippingLines: 'getShippingLines',
    changeShippingLines: 'changeShippingLines',
    setTaxes: 'setTaxes',
    addDiscount: 'addDiscount',
};

export const baseReturnObject: IApiReturnObject = {
    success: false,
    error: null,
    response: null
};

export const apiErrors: IApiErrors = {
    general: {status: 1000, message: 'General error thrown'},
    noCsrf: {status: 1001, message: 'CSRF Token not found'},
    /*
     * API RESPONSE - checkApiResponse function ERRORS
     *
     * - Application state errors being 110? status code
     * - Data errors starting being 120? status code
     * - Generic field errors being 190? code
     */
    errorsInResponse: {status: 1900, message: 'Errors found while parsing the response object'},
    noFieldInResponse: {status: 1901, message: '{{field}} not found in response'},
    emptyFieldInResponse: {status: 1092, message: '{{field}} is empty in response'},
    emptyKeysToCheck: {status: 1903, message: 'No keys to check in response'},
    noAppState: {status: 1100, message: 'Application state not found in response'},
    emptyAppState: {status: 1101, message: 'Application state is empty in response'},
    noResData: {status: 1200, message: 'Data not found in response'},
    emptyResData: {status: 1201, message: 'Data is empty in response'},
};
