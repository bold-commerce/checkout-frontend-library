import {
    IApiErrors,
    IApiReturnObject,
    IApiTypeKeys,
    IApiTypes,
    IEnvironmentTypes,
    IEnvironmentUrls,
    IGeneralApiResponseParsingErrorType,
    IHttpStatusCode,
    IMethods,
    IPigiActionTypes,
    IPigiResponseType
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
    initial_data: 'initial_data',
    jwt_token: 'jwt_token',
    public_order_id: 'public_order_id',
    style_sheet: 'style_sheet',
};

export const appStateKeysToTest = [keysToTestFromResponse.data, keysToTestFromResponse.applicationState];

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

export const pigiActionTypes: IPigiActionTypes = {
    PIGI_ADD_PAYMENT: 'PIGI_ADD_PAYMENT',
    PIGI_REFRESH_ORDER: 'PIGI_REFRESH_ORDER',
    PIGI_UPDATE_LANGUAGE: 'PIGI_UPDATE_LANGUAGE',
    PIGI_UPDATE_MEDIA_MATCH: 'PIGI_UPDATE_MEDIA_MATCH',
    PIGI_DISPLAY_ERROR_MESSAGE: 'PIGI_DISPLAY_ERROR_MESSAGE',
    PIGI_CLEAR_ERROR_MESSAGES: 'PIGI_CLEAR_ERROR_MESSAGES',
    PIGI_SELECT_PAYMENT_METHOD: 'PIGI_SELECT_PAYMENT_METHOD',
    PIGI_INITIALIZED: 'PIGI_INITIALIZED',
    PIGI_UPDATE_HEIGHT: 'PIGI_UPDATE_HEIGHT',
    PIGI_HANDLE_SCA: 'PIGI_HANDLE_SCA',
    PIGI_PAYMENT_ADDED: 'PIGI_PAYMENT_ADDED',
};

export const apiTypes: IApiTypes = {
    addGuestCustomer: {
        path: '/customer/guest',
        method: methods.POST,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    updateCustomer: {
        path: '/customer',
        method: methods.PUT,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    deleteCustomer: {
        path: '/customer',
        method: methods.DELETE,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    validateEmail: {
        path: '/validate_email_address',
        method: methods.GET,
        useJwt: true,
    },
    setShippingAddress: {
        path: '/addresses/shipping',
        method: methods.POST,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    getShippingLines: {
        path: '/shipping_lines',
        method: methods.GET,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    setBillingAddress: {
        path: '/addresses/billing',
        method: methods.POST,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    validateAddress: {
        path: '/validate_address',
        method: methods.GET,
        useJwt: true,
    },
    changeShippingLines: {
        path: '/shipping_lines',
        method: methods.POST,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    setTaxes: {
        path: '/taxes',
        method: methods.POST,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    addDiscount: {
        path: '/discounts',
        method: methods.POST,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    deleteDiscount: {
        path: '/discounts',
        method: methods.DELETE,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    getPaymentIframe: {
        path: '/payments/iframe',
        method: methods.GET,
        useJwt: false,
    },
    cssStylingPaymentIframe: {
        path: '/payments/styles',
        method: methods.POST,
        useJwt: true,
        keysToTest: [keysToTestFromResponse.data, keysToTestFromResponse.style_sheet]
    },
    processOrder: {
        path: '/process_order',
        method: methods.POST,
        useJwt: true,
        keysToTest: [keysToTestFromResponse.applicationState]
    },
    getApplicationState: {
        path: '/refresh',
        method: methods.GET,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    deleteBillingAddress: {
        path: '/addresses/billing',
        method: methods.DELETE,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    deleteShippingAddress: {
        path: '/addresses/shipping',
        method: methods.DELETE,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    updateShippingAddress: {
        path: '/addresses/shipping',
        method: methods.PUT,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
    updateBillingAddress: {
        path: '/addresses/billing',
        method: methods.PUT,
        useJwt: true,
        keysToTest: [...appStateKeysToTest]
    },
};

export const apiTypeKeys: IApiTypeKeys = {
    addGuestCustomer: 'addGuestCustomer',
    updateCustomer: 'updateCustomer',
    deleteCustomer: 'deleteCustomer',
    validateEmail: 'validateEmail',
    setShippingAddress: 'setShippingAddress',
    setBillingAddress: 'setBillingAddress',
    validateAddress: 'validateAddress',
    getShippingLines: 'getShippingLines',
    changeShippingLines: 'changeShippingLines',
    setTaxes: 'setTaxes',
    addDiscount: 'addDiscount',
    deleteDiscount: 'deleteDiscount',
    getPaymentIframe: 'getPaymentIframe',
    cssStylingPaymentIframe: 'cssStylingPaymentIframe',
    processOrder: 'processOrder',
    getApplicationState: 'getApplicationState',
    deleteBillingAddress: 'deleteBillingAddress',
    deleteShippingAddress: 'deleteShippingAddress',
    updateShippingAddress: 'updateShippingAddress',
    updateBillingAddress: 'updateBillingAddress'
};

export const baseReturnObject: IApiReturnObject = {
    success: false,
    error: null,
    response: null
};

export const apiErrors: IApiErrors = {
    general: {status: 1000, message: 'General error thrown'},
    noCsrf: {status: 1001, message: 'CSRF Token not found'},
    noPigiIframe: {status: 1002, message: 'PIGI iframe not found or empty'},
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

export const basePigiResponseType: IPigiResponseType = {
    responseType: '',
    payload: {
        success: false,
        height: 0
    }
};

export const httpStatusCode: IHttpStatusCode = {
    OK: 200,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
};
