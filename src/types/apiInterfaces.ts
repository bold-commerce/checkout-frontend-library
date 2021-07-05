import {IFetchError} from './errorInterfaces';

export interface IApiResponse {
    data: ISessionStartApi;
}

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

export interface ISessionStartApi {
    csrf_token: string;
}

export interface IApiTypes {
    sessionStart: IApiTypesDetail;
}

export interface IApiTypesDetail{
    path: string;
    method: string;
    useCsrf: boolean;
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
    customer?: Array<ICustomer>;
    addresses?: IAddressType;
    lineItems?: Array<ILineItem>;
    shipping?: IShipping;
    taxes?: Array<ITax>;
    discounts?: Array<IDiscount>;
    payments?: Array<IPayment>;
    orderTotal?: number;
    orderMetaData: IOrderMetaData;
}

export interface IOrderMetaData {
    cartParameters?: ICartParameters;
    noteAttributes?: ICartParameters;
    notes?: string;
    tags?: Array<string>;
}

export interface IPayment {
   gatewayPublicId: string;
   amount?: number;
   currency?: string;
   type?: string;
   displayString?: string;
   id?: string;
   token?: string;
   retain?: string;
}

export interface IShipping {
    selectShippingLine?: ISelectShippingLine;
    availableShippingLines?: Array<IAvailableShippingLine>;
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
    productData?: IProductData;
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
    billing?: IAddress;
    shipping?: IAddress;
}

export interface ICustomer {
    readonly platformId?: string | null;
    readonly publicId?: string | null;
    firstName?: string;
    lastName?: string;
    emailAddress: string;
    savedAddresses?: Array<IAddress>;
}

export interface IAddress {
    id?: string | null;
    firstName?: string;
    lastName?: string;
    addressLine1?: string;
    addressLine2?: string;
    country: string;
    city?: string;
    province?: string;
    countryCode: string;
    provinceCode?: string;
    postalCode?: string;
    businessName?: string;
    phoneNumber?: string;
}

export interface ICartParameters {
    description?: string;
    key?: string;
}
