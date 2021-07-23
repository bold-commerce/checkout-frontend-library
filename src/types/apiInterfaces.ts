import {IFetchError} from 'src';

export interface IApiSuccessResponse {
    data:
        ISessionStartApiResponse |
        IAddGuestCustomerResponse |
        ISetShippingAddressResponse |
        ISetBillingAddressResponse |
        IShippingLinesResponse |
        undefined;
}

export type IApiSuccessResponseDataType = ISessionStartApiResponse | ISetShippingAddressResponse | IShippingLinesResponse;

export interface IMethods {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
}

export interface IApiReturnObject {
    success: boolean;
    error: null | IFetchError;
    response: null | IApiResponse;
}

export interface IFetchCallback extends Function {
    (obj: IApiReturnObject): void;
}

export interface ISessionStartApiResponse {
    csrf_token: string | undefined;
}

export interface IAddGuestCustomerResponse {
    customer: ICustomer | undefined;
    application_state: IApplicationState | undefined;
}

export interface ISetShippingAddressResponse {
    address: IAddress | undefined;
    application_state: IApplicationState | undefined;
}

export interface ISetBillingAddressResponse {
    address: IAddress | undefined;
    application_state: IApplicationState | undefined;
}

export interface IShippingLinesResponse {
    shipping_lines: Array<IShippingLine> | undefined;
    application_state: IApplicationState | undefined;
}

export interface IApiErrorResponse {
    message: string;
    type: string; // Todo - Check with PAPI the list of possible types to declare const and types
    field: string; // Todo - Check with PAPI the list of possible fields to declare const and types
    severity: string; // Todo - Check with PAPI the list of possible severities to declare const and types
    sub_type: string; // Todo - Check with PAPI the list of possible sub_types to declare const and types
}

export interface IApiTypes {
    sessionStart: IApiTypesDetail;
    addGuestCustomer: IApiTypesDetail;
    validateEmail: IApiTypesDetail;
    getShippingLines: IApiTypesDetail;
    setShippingAddress: IApiTypesDetail;
    setBillingAddress: IApiTypesDetail;
    validateAddress: IApiTypesDetail;
}

export interface IApiTypeKeys {
    sessionStart: keyof IApiTypes;
    addGuestCustomer: keyof IApiTypes;
    validateEmail: keyof IApiTypes;
    validateAddress: keyof IApiTypes;
    setShippingAddress: keyof IApiTypes;
    getShippingLines: keyof IApiTypes;
    setBillingAddress: keyof IApiTypes;
}

export interface IValidateAddress {
    postal_code: string;
    province: string;
    country_code: string;
}

export interface IValidateEmail {
    email_address: string
}

export type IApiUrlQueryParams = IValidateEmail | IValidateAddress;

export interface IApiTypesDetail {
    path: string;
    method: string;
    useCsrf: boolean;
    keysToTest?: Array<string>;
}

export interface IOrderInitialData {
    shopName?:           string;
    countryInformation?: Array<ICountryInformation>;
    supportedLanguages?: Array<string>;
}

export interface ICountryInformation {
    isoCode?:          string;
    name?:             string;
    showProvince?:     boolean;
    provinceLabel?:    string;
    showPostalCode?:   boolean;
    provinces?:        Array<IProvince>;
    validForShipping?: boolean;
    validForBilling?:  boolean;
}

export interface IProvince {
    isoCode?:          string;
    name?:             string;
    validForShipping?: boolean;
    validForBilling?:  boolean;
}

export interface IApplicationState {
    customer: ICustomer;
    addresses: IAddressType;
    line_items: Array<ILineItem>;
    taxes: Array<ITax>;
    discounts: Array<IDiscount>;
    payments: Array<IPayment>;
    order_meta_data: IOrderMetaData;
    shipping: IShipping;
    order_total: number;
}

export interface IOrderMetaData {
    cart_parameters?: ICartParameters;
    note_attributes?: ICartParameters;
    notes?: string;
    tags?: Array<string>;
}

export interface IPayment {
    gateway_public_id: string;
    amount?: number;
    currency?: string;
    type?: string;
    display_string?: string;
    id?: string;
    token?: string;
    retain?: string;
}

export interface IShipping {
    select_shipping_line?: ISelectShippingLine;
    available_shipping_lines?: Array<IAvailableShippingLine>;
    taxes?: Array<ITax>;
    discounts?: Array<IDiscount>;
}

export interface IAvailableShippingLine {
    id?: number;
}

export interface ISelectShippingLine {
    id?: string;
    description?: string;
    amount?: number;
}

export interface ILineItem {
    product_data?: IProductData;
    taxes?: Array<ITax>;
    fees?: Array<IFee>;
    discounts?: Array<IDiscount>;
}

export interface ITax {
    value?: number;
    name?: string;
    is_included?: boolean;
}

export interface IDiscount {
    code?: string;
    text?: string;
    value?: number;
    valid?: boolean;
}

export interface IFee {
    amount?: number;
    name?: string;
}

export interface IProductData {
    id?: string;
    title?: string;
    image_url?: string;
    properties?: {
        key?: string;
    },
    description?: string;
    quantity?: number;
    price?: number;
    total_price?: number;
    visible?: boolean;
    line_item_key?: string;
    barcode?: string;
    compare_at_price?: number;
    weight?: number;
    weight_unit?: string;
    product_id?: string;
    variant_id?: string;
    requires_shipping?: boolean;
    sku?: string;
    taxable?: boolean;
    tags?: string;
}

export interface IAddressType {
    billing: IAddress;
    shipping: IAddress;
}

export interface ICustomer {
    platform_id: string | null;
    public_id: string | null;
    first_name: string;
    last_name: string;
    email_address: string;
    saved_addresses: Array<IAddress>;
}

export interface IAddress {
    id?: string | null;
    first_name?: string;
    last_name?: string;
    address_line_1?: string;
    address_line_2?: string;
    country: string;
    city?: string;
    province?: string;
    country_code: string;
    province_code?: string;
    postal_code?: string;
    business_name?: string;
    phone_number?: string;
}

export interface ICartParameters {
    key?: string;
}

export interface ISessionStartRequest {
    token: string;
}

export interface IAddGuestCustomerRequest {
    first_name: string;
    last_name: string;
    email: string;
}

export interface IValidateEmailRequest {
    email_address: string;
}

export interface IValidateAddressRequest {
    postal_code: string;
    province: string;
    country_code: string;
}

export type IApiResponse = IApiErrorResponse | IApiSuccessResponse;

export type ISetShippingAddressRequest = IAddress;
export type ISetBillingAddressRequest = IAddress;

export type IGetApiOptionsBody =
    ISessionStartRequest |
    IAddGuestCustomerRequest |
    IValidateEmailRequest |
    ISetShippingAddressRequest |
    ISetBillingAddressRequest |
    IValidateAddressRequest |
    Record<string, unknown>;

export interface IShippingLine {
    id: string;
    description: string;
    amount: number;
}
