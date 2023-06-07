import {IFetchError} from 'src';

export interface IApiSuccessResponse {
    data?:
        ISessionStartApiResponse |
        IAddGuestCustomerResponse |
        IDeleteCustomerResponse |
        ISetShippingAddressResponse |
        ISetBillingAddressResponse |
        IGetShippingLinesResponse |
        IChangeShippingLineResponse |
        IAddDiscountResponse |
        ISetTaxesResponse |
        IDeleteDiscountResponse |
        IGetPaymentIframeUrl |
        IInitializeOrderResponse |
        ICssStylingPaymentIframeResponse |
        ICheckInventoryResponse |
        IAddPaymentResponse |
        IUpdateLineItemQuantityResponse |
        IPatchOrderMetaDataResponse;
    application_state?: IApplicationState;
}

export interface IApiAcceptedResponse {
    handleSCA?: boolean;
}

export interface ICssRule {
    cssText: string;
}

export interface IMediaRule {
    conditionText: string;
    cssRules: Array<ICssRule>
}

export interface ICssStylingPaymentIframeRequest {
    css_rules?: Array<ICssRule>;
    media_rules?: Array<IMediaRule>;
}

export interface IMethods {
    GET: string;
    POST: string;
    PUT: string;
    PATCH: string;
    DELETE: string;
}

export interface IPigiActionTypes {
    PIGI_ADD_PAYMENT: string;
    PIGI_REFRESH_ORDER: string;
    PIGI_UPDATE_LANGUAGE: string;
    PIGI_UPDATE_MEDIA_MATCH: string;
    PIGI_DISPLAY_ERROR_MESSAGE: string;
    PIGI_CLEAR_ERROR_MESSAGES: string;
    PIGI_SELECT_PAYMENT_METHOD: string;
    PIGI_INITIALIZED: string;
    PIGI_UPDATE_HEIGHT: string;
    PIGI_HANDLE_SCA: string;
    PIGI_PAYMENT_ADDED: string;
    PIGI_DISPLAY_IN_FULL_PAGE: string;
    PIGI_DISPLAY_IN_FULL_PAGE_DONE: string;
}

export interface IExternalPaymentGatewayToParentActionTypes {
    EXTERNAL_PAYMENT_GATEWAY_ADD_PAYMENT: string;
    EXTERNAL_PAYMENT_GATEWAY_REFRESH_ORDER: string;
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_MEDIA_MATCH: string;
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_HEIGHT: string;
    EXTERNAL_PAYMENT_GATEWAY_INITIALIZED: string;
    EXTERNAL_PAYMENT_GATEWAY_TOKENIZING_IN_PROGRESS: string;
    EXTERNAL_PAYMENT_GATEWAY_TOKENIZING_COMPLETED: string;
}

export interface IExternalPaymentGatewayToIframeActionTypes {
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_STATE: string;
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_LANGUAGE: string;
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_MEDIA_MATCH: string;
    EXTERNAL_PAYMENT_GATEWAY_BILLING_ADDRESS_CHANGED: string;
    EXTERNAL_PAYMENT_GATEWAY_SHIPPING_ADDRESS_CHANGED: string;
    EXTERNAL_PAYMENT_GATEWAY_HANDLE_SCA: string;
    EXTERNAL_PAYMENT_GATEWAY_SET_CONFIG: string;
}

export interface IAlternatePaymentMethodType {
    STRIPE: string;
    PAYPAL: string;
    BRAINTREE_GOOGLE: string;
    BRAINTREE_APPLE: string;
    PPCP_APPLE: string;
}

export type IInventoryStage = 'initial' | 'final';

export interface ICheckInventoryStage {
    initial: IInventoryStage;
    final: IInventoryStage
}

export interface IApiReturnObject {
    status: number;
    success: boolean;
    error: null | IFetchError;
    response: null | IApiResponse;
}

export interface IFetchCallback extends Function {
    (obj: IApiReturnObject): void;
}

export interface IInitializeOrderResponse {
    initial_data: IOrderInitialData,
    application_state: IApplicationState,
    jwt_token: string,
    public_order_id: string
}

export interface ICssStylingPaymentIframeResponse {
    style_sheet: IStyleSheet
}

export interface IUpdateLineItemQuantityResponse {
    line_item: IProductData;
    application_state: IApplicationState;
}

export interface IStyleSheet {
    cssRules?: Array<ICssRule>;
    mediaRules?: Array<IMediaRule>;
}

export interface ISessionStartApiResponse {
    csrf_token: string | undefined;
}

export interface IAddGuestCustomerResponse {
    customer: ICustomer | undefined;
    application_state: IApplicationState | undefined;
}

export type IDeleteCustomerResponse = IAddGuestCustomerResponse;

export interface IAddDiscountResponse {
    discount: IDiscount | undefined;
    application_state: IApplicationState | undefined;
}

export interface IDeleteDiscountResponse {
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

export interface IGetShippingLinesResponse {
    shipping_lines: Array<IShippingLine> | undefined;
    application_state: IApplicationState | undefined;
}

export interface IChangeShippingLineResponse {
    selected_shipping: IShippingLine | undefined;
    application_state: IApplicationState | undefined;
}

export interface ISetTaxesResponse {
    taxes: Array<ITax> | undefined;
    application_state: IApplicationState | undefined;
}

export interface ICheckInventoryResponse {
    inventory_check: IInventoryCheck;
    application_state: IApplicationState | undefined;
}

export interface IPatchOrderMetaDataResponse {
    order_meta_data: IOrderMetaData | undefined;
    application_state: IApplicationState | undefined;
}

export interface IAddPaymentResponse {
    payment: IPayment;
    application_state: IApplicationState | undefined;
}

export interface IGetPaymentIframeUrl {
    url: string | undefined;
}

export interface IApiErrorResponse {
    message: string;
    type: string; // Todo - Check with PAPI the list of possible types to declare const and types
    field: string; // Todo - Check with PAPI the list of possible fields to declare const and types
    severity: string; // Todo - Check with PAPI the list of possible severities to declare const and types
    sub_type: string; // Todo - Check with PAPI the list of possible sub_types to declare const and types
}

export interface IApiErrorsResponse {
    errors: Array<IApiErrorResponse>
}

export interface IApiTypes {
    addGuestCustomer: IApiTypesDetail;
    addLineItem: IApiTypesDetail;
    updateCustomer: IApiTypesDetail;
    deleteCustomer: IApiTypesDetail;
    deleteLineItem: IApiTypesDetail;
    validateEmail: IApiTypesDetail;
    getShippingLines: IApiTypesDetail;
    setShippingAddress: IApiTypesDetail;
    setBillingAddress: IApiTypesDetail;
    validateAddress: IApiTypesDetail;
    changeShippingLines: IApiTypesDetail;
    setTaxes: IApiTypesDetail;
    addDiscount: IApiTypesDetail;
    getPaymentIframe: IApiTypesDetail;
    cssStylingPaymentIframe: IApiTypesDetail;
    deleteDiscount: IApiTypesDetail;
    processOrder: IApiTypesDetail;
    getApplicationState: IApiTypesDetail;
    deleteBillingAddress: IApiTypesDetail;
    deleteShippingAddress: IApiTypesDetail;
    updateShippingAddress: IApiTypesDetail;
    updateBillingAddress: IApiTypesDetail;
    updateItem: IApiTypesDetail;
    checkInventory: IApiTypesDetail;
    validateDiscount: IApiTypesDetail;
    getPaymentList: IApiTypesDetail;
    addPayment: IApiTypesDetail;
    updatePayment: IApiTypesDetail;
    deletePayment: IApiTypesDetail;
    deleteGiftCardPayment: IApiTypesDetail;
    patchOrderMetaData: IApiTypesDetail;
}

export interface IApiTypeKeys {
    addGuestCustomer: keyof IApiTypes;
    addLineItem: keyof IApiTypes;
    updateCustomer: keyof IApiTypes;
    deleteCustomer: keyof IApiTypes;
    deleteLineItem: keyof IApiTypes;
    validateEmail: keyof IApiTypes;
    validateAddress: keyof IApiTypes;
    setShippingAddress: keyof IApiTypes;
    getShippingLines: keyof IApiTypes;
    setBillingAddress: keyof IApiTypes;
    changeShippingLines: keyof IApiTypes;
    setTaxes: keyof IApiTypes;
    addDiscount: keyof IApiTypes;
    getPaymentIframe: keyof IApiTypes;
    cssStylingPaymentIframe: keyof IApiTypes;
    deleteDiscount: keyof IApiTypes;
    processOrder: keyof IApiTypes;
    getApplicationState: keyof IApiTypes;
    deleteBillingAddress: keyof IApiTypes;
    deleteShippingAddress: keyof IApiTypes;
    updateShippingAddress: keyof IApiTypes;
    updateBillingAddress: keyof IApiTypes;
    updateItem: keyof IApiTypes;
    checkInventory: keyof IApiTypes;
    validateDiscount: keyof  IApiTypes;
    getPaymentList: keyof  IApiTypes;
    addPayment: keyof  IApiTypes;
    updatePayment: keyof  IApiTypes;
    deletePayment: keyof  IApiTypes;
    deleteGiftCardPayment: keyof  IApiTypes;
    patchOrderMetaData: keyof IApiTypes;
}

export interface IValidateAddress {
    first_name: string;
    last_name: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    postal_code: string;
    province: string;
    country_code: string;
    country: string;
    province_code: string;
    business_name?: string;
    phone_number?: string;
}


export interface IValidateEmail {
    email_address: string
}

export interface IPaymentFrame {
    token: string
}

export interface ICheckInventory {
    stage: IInventoryStage
}

export interface IValidateDiscount {
    discount_code: string
}

export type IApiUrlQueryParams = IValidateEmail | IValidateAddress | IPaymentFrame | ICheckInventory | IValidateDiscount;

export interface IApiTypesDetail {
    path: string;
    method: string;
    useJwt: boolean;
    keysToTest?: Array<string>;
}

export type IAlternativePaymentMethod = Array<IExpressPayStripe | IExpressPayPaypal | IExpressPayBraintreeGoogle | IExpressPayBraintreeApple | IExpressPayPaypalCommercePlatform> ;
export type IExternalPaymentGateways = Array<IExternalPaymentGateway>;

export interface IOrderInitialData {
    shop_name: string;
    country_info: Array<ICountryInformation>;
    supported_languages: Array<ISupportedLanguage>;
    general_settings: IGeneralSettings;
    alternative_payment_methods: IAlternativePaymentMethod
    external_payment_gateways:  IExternalPaymentGateways
}

export interface ISupportedLanguage {
    id: number,
    shop_id: number,
    iso_language: string,
    language_name: string,
    language_blob: string,
    is_default: boolean,
    out_of_date: number,
    enabled: number,
    source: null | string,
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null,
    name: string,
    shop_language_id: number
}

export interface ICountryInformation {
    iso_code:          string;
    name:             string;
    show_province:     boolean;
    province_label:    string;
    show_postal_code:   boolean;
    provinces:        Array<IProvince>;
    valid_for_shipping: boolean;
    valid_for_billing:  boolean;
}

export interface ICheckoutProcess{
    company_name_option: string,
    phone_number_required: boolean,
    accepts_marketing_checkbox_option: string,
    tax_exempt_checkbox_enabled?: boolean,
    tax_shipping?: boolean,
}

export interface IAddressAutoComplete{
    provider: string | null,
    api_key: string | null,
}

export interface IGeneralSettings{
    checkout_process: ICheckoutProcess,
    address_autocomplete: IAddressAutoComplete,
}

export interface IExpressPayStripe {
   type: string;
   key: string;
   stripe_user_id: string;
   account_country: string;
   public_id: string;
}

export interface IExpressPayPaypal {
   type: string;
   is_test: boolean;
   client_id: string;
   button_style: Record<string, unknown>;
   public_id: string;
}

export interface IExpressPayPaypalCommercePlatform {
    type: string;
    is_test: boolean;
    public_id: string;
    apple_pay_enabled: boolean;
    partner_id: string;
    merchant_id: string;
}

export interface IExpressPayBraintree {
    type: string;
    public_id: string;
    is_test: boolean;
    merchant_account: string;
    tokenization_key: string;
    button_style: Record<string, unknown>;
}

export interface IExpressPayBraintreeGoogle extends IExpressPayBraintree {
    google_pay_enabled: boolean;
    google_pay_merchant_identifier: string;
    apiVersion: string;
    sdkVersion: string;
    merchantId: string;
}

export interface IExpressPayBraintreeApple extends IExpressPayBraintree {
    apple_pay_enabled: boolean;
}

export interface IExternalPaymentGateway {
    is_test: boolean;
    iframe_url: string;
    target_div: string;
    base_url: string;
    public_id: string;
    location: string;
    currency: string;
}

export interface IExternalPaymentGatewayLanguage {
    language: string;
}

export interface IProvince {
    iso_code: string;
    name: string;
    valid_for_shipping: boolean;
    valid_for_billing: boolean;
}

export interface IApplicationState {
    customer: ICustomer;
    addresses: IAddressType;
    line_items: Array<ILineItem>;
    shipping: IShipping;
    taxes: Array<ITax>;
    discounts: Array<IDiscount>;
    payments: Array<IPayment>;
    order_total: number;
    order_meta_data: IOrderMetaData;
    currency: ICurrency;
    resumable_link: string | null;
    link_to_cart: string | null;
    is_processed: boolean;
    created_via: string;
    fees: Array<IFees>;
}

export interface IOrderMetaData {
    cart_parameters: ICartParameters;
    note_attributes: ICartParameters;
    notes: string;
    tags: Array<string>;
}

export interface IPayment {
    gateway_public_id: string,
    amount: number,
    currency: string,
    tag?: string,
    type: string,
    display_string: string,
    id: string,
    token: string,
    retain: boolean,
    friendly_brand?: string,
    lineText?: string,
    value?: number,
    brand?: string,
    driver?: string,
}

export interface IShipping {
    selected_shipping: IShippingLine;
    available_shipping_lines: Array<IShippingLine>;
    taxes: Array<ITax>;
    discounts: Array<IDiscount>;
}

export interface IAvailableShippingLine {
    id: number;
    line: IShippingLine;
}

export interface ICurrency {
    iso_code: string,
    iso_numeric_code: number,
    symbol: string,
    format: string,
    has_decimal: boolean,
    show_iso_code: boolean
}

export interface IFees {
    id: string;
    line_text: string;
    fee_type: string;
    value: number;
    source: string;
    plugin_uuid?: string;
    taxable: boolean;
}

export interface ILineItem {
    product_data: IProductData;
    taxes: Array<ITax>;
    fees: Array<IFee>;
    discounts: Array<IDiscount>;
}

export interface ITax {
    value: number;
    name: string;
    is_included: boolean;
}

export interface IDiscount {
    code: string;
    text: string;
    value: number;
    valid: boolean;
    source?: string;
}

export interface IFee {
    amount: number;
    name: string;
}

export interface IProductData {
    id: string;
    title: string;
    image_url: string;
    product_title: string;
    properties: Record<string, string>
    description: string;
    quantity: number;
    price: number;
    total_price: number;
    visible: boolean;
    line_item_key: string;
    barcode: string;
    compare_at_price: number;
    weight: number;
    weight_unit: string;
    product_id: string;
    variant_id: string;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    tags: string;
    vendor: string;
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
    accepts_marketing: boolean;
    saved_addresses: Array<IAddress>;
}

export interface IAddress {
    id?: string | null;
    first_name: string;
    last_name: string;
    address_line_1: string;
    address_line_2: string;
    country: string;
    city: string;
    province: string;
    country_code: string;
    province_code: string;
    postal_code: string;
    business_name: string;
    phone_number: string;
}

export interface ICartParameters {
    key?: string;
}

export interface ISessionStartRequest {
    token: string;
}

export interface IChangeShippingLineRequest {
    index: string;
}

export interface IDiscountRequest {
    code: string;
}

export interface IAddGuestCustomerRequest {
    first_name: string;
    last_name: string;
    email: string;
    accepts_marketing: boolean;
}

export interface ILineItemRequest {
   line_item_key: string;
   quantity: number;
   platform_id?: string;
   sku?: string;
}

export interface ILineItemRequestWithSku extends ILineItemRequest {
    sku: string;
}

export interface ILineItemRequestWithPlatformId extends ILineItemRequest {
    platform_id: string;
}

export interface IValidateEmailRequest {
    email_address: string;
}

export interface IValidateAddressRequest {
    postal_code: string;
    province: string;
    country_code: string;
    province_code: string;
    country: string;
    business_name?: string;
    phone_number?: string;
}

export type IApiResponse = IApiErrorResponse | IApiErrorsResponse | IApiSuccessResponse | IApiAcceptedResponse;

export type ISetShippingAddressRequest = IAddress;

export type ISetBillingAddressRequest = IAddress;

export interface IAddPaymentRequest {
    gateway_public_id: string;
    amount?: number;
    currency?: string;
    type?: string;
    display_string?: string;
    token: string;
    retain?: boolean
}

export type IUpdatePaymentRequest = IAddPaymentRequest;

export type IDeletePaymentRequest = IAddPaymentRequest;

export interface IPatchOrderMetaDataRequest {
    cart_parameters: ICartParameters | null;
    note_attributes: ICartParameters | null;
    notes: string | null;
    tags: Array<string> | null;
}

export type IGetApiOptionsBody =
    ISessionStartRequest |
    IAddGuestCustomerRequest |
    ILineItemRequest |
    ILineItemRequestWithSku |
    ILineItemRequestWithPlatformId |
    IValidateEmailRequest |
    ISetShippingAddressRequest |
    ISetBillingAddressRequest |
    IValidateAddressRequest |
    IChangeShippingLineRequest |
    IDiscountRequest |
    ICssStylingPaymentIframeRequest |
    IAddPaymentRequest |
    IUpdatePaymentRequest |
    IDeletePaymentRequest |
    IPatchOrderMetaDataRequest |
    Record<string, unknown>;

export interface IShippingLine {
    id: string;
    description: string;
    amount: number;
}

export interface IPigiActionType {
    actionType: string;
    payload?: Record<string, unknown>;
}

export interface IExternalPaymentGatewayActionType {
    type: string;
    payload?: IInitializeOrderResponse | IExternalPaymentGateway | IExternalPaymentGatewayLanguage | IAddress;
}

export interface IPigiResponseType {
    responseType: string;
    payload: Record<string, unknown>;
}

export interface IInventoryCheck {
    result: 'pass' | 'fail' | 'not_enabled';
    reason?: string;
    failed_items?: Array<IInventoryFailedItems>;
}

export interface IInventoryFailedItems {
    platform_variant_id: string,
    available_quantity: number
}
