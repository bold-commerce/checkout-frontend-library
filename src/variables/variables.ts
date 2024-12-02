import {
    environmentTypes,
    environmentUrls,
    environmentPath,
    IEnvironment,
    IAuth,
    IApplicationState,
    IAddress,
    IAddressType,
    ICustomer,
    ILineItem,
    ITax,
    IDiscount,
    IPayment,
    IPigi,
    IOrderMetaData,
    IShipping,
    ICurrency,
    IOrderInitialData,
    ICountryInformation,
    IGeneralSettings,
    ISupportedLanguage,
    IFees,
    httpStatusCode,
} from 'src';

export const environment: Required<IEnvironment> = {
    type: environmentTypes.production,
    url: environmentUrls.production,
    path: environmentPath,
};

export const auth: IAuth = {
    shopIdentifier: '',
    publicOrderId: '',
    csrfToken: '',
    jwtToken: ''
};

export const pigi: IPigi = {
    iFrameId: ''
};

export const customer: ICustomer =  {
    platform_id: '',
    public_id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    accepts_marketing: false,
    saved_addresses: []
};

export const shippingAddress: IAddress = {
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    country: '',
    city: '',
    province: '',
    country_code: '',
    province_code: '',
    postal_code: '',
    business_name: '',
    phone_number: ''
};

export const billingAddress: IAddress = {
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    country: '',
    city: '',
    province: '',
    country_code: '',
    province_code: '',
    postal_code: '',
    business_name: '',
    phone_number: ''
};

export const addresses: IAddressType = {
    shipping: shippingAddress,
    billing: billingAddress
};

export const line_items: Array<ILineItem> = [];

export const taxes: Array<ITax> = [];

export const discounts: Array<IDiscount> = [];

export const fees: Array<IFees> = [];

export const payments: Array<IPayment> = [];

export const order_meta_data: IOrderMetaData = {
    cart_parameters: {
        key: ''
    },
    note_attributes: {
        key: ''
    },
    notes: '',
    tags: []
};

export const shipping: IShipping = {
    selected_shipping: {
        id: '',
        description: '',
        amount: 0,
        code: '',
    },
    available_shipping_lines: [],
    taxes: [],
    discounts: []
};

export const currency: ICurrency = {
    iso_code: 'cad',
    iso_numeric_code: 124,
    symbol: '$',
    format: '${amount}',
    has_decimal: false,
    show_iso_code: true
};

export const display_currency: ICurrency | null = null;

export const countryInfo: ICountryInformation = {
    iso_code: 'CA',
    name: 'Canada',
    show_province: false,
    province_label: 'Province',
    show_postal_code: false,
    provinces: [],
    valid_for_shipping: false,
    valid_for_billing: false
};

export const generalSettings: IGeneralSettings = {
    checkout_process: {
        company_name_option: 'required',
        phone_number_required: false,
        accepts_marketing_checkbox_option: 'checked',
        tax_exempt_checkbox_enabled: undefined,
        tax_shipping: true,
        rsa_enabled: false
    },
    address_autocomplete: {
        provider: null,
        api_key: null
    }
};

export const supportedLanguages: ISupportedLanguage = {
    id: 0,
    shop_id: 0,
    iso_language: '',
    language_name: '',
    language_blob: '',
    is_default: true,
    out_of_date: 0,
    enabled: 1,
    source: null,
    created_at: '',
    updated_at: '',
    deleted_at: null,
    name: '',
    shop_language_id: 0
};

export const applicationState: IApplicationState = {
    customer,
    addresses,
    line_items,
    taxes,
    discounts,
    payments,
    order_meta_data,
    shipping,
    order_total: 0,
    order_balance: 0,
    resumable_link: '',
    link_to_cart: null,
    currency,
    display_currency,
    display_exchange_rate: null,
    created_via: '',
    is_processed: false,
    fees,
    flow_id: null,
};

export const orderInitialData: IOrderInitialData = {
    shop_name: '',
    country_info: [countryInfo],
    general_settings: generalSettings,
    supported_languages: [supportedLanguages],
    alternative_payment_methods: [],
    external_payment_gateways: [],
    life_elements: [],
    fraud_tools: [],
    flow_settings: {},
    requires_shipping: true,
    eps_gateways: {},
};

export const retryErrorCodeList: Array<number> = [
    httpStatusCode.REQUEST_TIMEOUT,
    httpStatusCode.TOO_MANY_REQUEST,
    httpStatusCode.SERVICE_UNAVAILABLE,
    httpStatusCode.GATEWAY_TIMEOUT,
    httpStatusCode.ORDER_LOCKED,
    httpStatusCode.ORDER_TIMEOUT_LOCK,
];

export const retryErrorCodeWaitTime: Array<number> = [300, 300, 600, 900, 1500];
