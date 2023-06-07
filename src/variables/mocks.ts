import {
    IAddress,
    IAddressType,
    IApplicationState,
    IAvailableShippingLine,
    ICustomer,
    IDiscount,
    IFee,
    IInitializeOrderResponse,
    ILineItem,
    IOrderMetaData,
    IPayment,
    IProductData,
    IShipping,
    IShippingLine,
    ITax,
    IOrderInitialData,
    ICountryInformation,
    IProvince,
    ICssRule,
    IMediaRule,
    ICssStylingPaymentIframeRequest,
    ICurrency,
    ISupportedLanguage,
    alternatePaymentMethodType,
    IFees,
    IPatchOrderMetaDataRequest
} from 'src';

export const shippingAddressMock: IAddress = {
    id: undefined,
    first_name: 'John',
    last_name: 'Doe',
    address_line_1: '123 Any St',
    address_line_2: 'Line 2',
    country: 'CA',
    city: 'Winnipeg',
    province: 'MB',
    country_code: 'CA',
    province_code: 'MB',
    postal_code: 'R3Y0L6',
    business_name: 'Some Business Name',
    phone_number: '1231231234'
};

export const billingAddressMock: IAddress = {
    id: undefined,
    first_name: 'Jane',
    last_name: 'Doe',
    address_line_1: '456 Any St',
    address_line_2: 'Line 2',
    country: 'CA',
    city: 'Winnipeg',
    province: 'MB',
    country_code: 'CA',
    province_code: 'MB',
    postal_code: 'R3Y0L6',
    business_name: 'Some Business Name',
    phone_number: '3453453456'
};

export const emptyAddressMock: IAddress = {
    id: undefined,
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

export const customerMock: ICustomer = {
    platform_id: 'test_platform_id',
    public_id: 'test_public_id',
    first_name: 'John',
    last_name: 'Doe',
    email_address: 'john.doe@example.com',
    accepts_marketing: false,
    saved_addresses: [{
        first_name: 'John',
        last_name: 'Doe',
        address_line_1: '123 Any St',
        address_line_2: 'Line 2',
        country: 'CA',
        city: 'Winnipeg',
        province: 'MB',
        country_code: 'CA',
        province_code: 'MB',
        postal_code: 'R3Y0L6',
        business_name: 'Some Business Name',
        phone_number: '1231231234'
    }]
};

export const emptyCustomerMock: ICustomer = {
    platform_id: '',
    public_id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    accepts_marketing: false,
    saved_addresses: []
};

export const taxMock: ITax = {
    value: 0,
    name: 'test_tax_name',
    is_included: true
};

export const feesMock: IFees = {
    id: '101292879',
    line_text:' Some Fee Description',
    fee_type: 'percentage',
    value: 1200,
    source: 'PLUGIN',
    plugin_uuid: 'd5eccfe2-f3f0-11ec-afac-be28b404fd64',
    taxable: false
};


export const taxesArrayMock: Array<ITax> = [
    {
        value: 0,
        name: 'test_tax_name_included',
        is_included: true
    },
    {
        value: 12.34,
        name: 'test_tax_name',
        is_included: false
    },
];

export const discountMock: IDiscount = {
    code: 'test_code',
    text: 'test text',
    value: 1,
    valid: true,
    source: '',
};

export const feeMock: IFee = {
    amount: 1,
    name: 'test fee'
};

export const currencyMock: ICurrency = {
    iso_code: 'USD',
    iso_numeric_code: 840,
    symbol: '$',
    format: '${{amount}}',
    has_decimal: true,
    show_iso_code: true
};

export const productData: IProductData = {
    id: 'product_test_id',
    title: 'Product Title',
    product_title: 'title',
    image_url: '',
    properties: {'test': 'test-value'},
    description: 'Product Description',
    quantity: 1,
    price: 1000,
    total_price: 1000,
    visible: true,
    line_item_key: 'some_test_item_key',
    barcode: '',
    compare_at_price: 900,
    weight: 1,
    weight_unit: 'kg',
    product_id: 'test_product_id',
    variant_id: 'test_variant_id',
    requires_shipping: true,
    sku: 'test_sku',
    taxable: true,
    tags: 'test_tag',
    vendor: ''
};

export const paymentMock: IPayment = {
    id: 'test_id',
    gateway_public_id: 'test_gateway_public_id',
    amount: 1000,
    currency: 'CAD',
    type: 'test_type',
    display_string: 'test_display_string',
    token: 'test_token',
    retain: true,
};

export const orderMetaDataMock: IOrderMetaData ={
    cart_parameters: {key: 'test_key'},
    note_attributes: {key: 'test_key'},
    notes: 'test notes',
    tags: ['test_tag_1', 'test_tag_2']
};

export const patchOrderMetaDataMock: IPatchOrderMetaDataRequest = {
    cart_parameters: null,
    note_attributes: {key: 'test_key'},
    notes: null,
    tags: null,
};

export const selectShippingLineMock: IShippingLine = {
    id: 'test_select_shipping_line_id',
    description: 'Test Description',
    amount: 100
};

export const availableShippingLineMock: IAvailableShippingLine = {
    id: 1,
    line: selectShippingLineMock
};

export const currency: ICurrency = {
    iso_code: 'cad',
    iso_numeric_code: 124,
    symbol: '$',
    format: '${amount}',
    has_decimal: false,
    show_iso_code: true
};


export const shippingMock: IShipping = {
    selected_shipping: selectShippingLineMock,
    available_shipping_lines: [selectShippingLineMock],
    taxes: [taxMock],
    discounts: [discountMock]
};

export const lineItemMock: ILineItem = {
    product_data: productData,
    taxes: [taxMock, taxMock, taxMock],
    fees: [feeMock, feeMock, feeMock],
    discounts: [discountMock]
};

export const addressesMock: IAddressType = {
    shipping: shippingAddressMock,
    billing: billingAddressMock
};

export const applicationStateMock: IApplicationState = {
    customer: customerMock,
    addresses: addressesMock,
    line_items: [lineItemMock],
    taxes: [taxMock, taxMock, taxMock],
    discounts: [discountMock],
    payments: [paymentMock],
    order_meta_data: orderMetaDataMock,
    shipping: shippingMock,
    order_total: 10000,
    resumable_link: null,
    link_to_cart: null,
    currency: currency,
    is_processed: false,
    created_via: 'checkout',
    fees: [feesMock]
};

export const selectShippingLineArrayMock: Array<IShippingLine> = [
    {
        id: '1',
        description: 'First shipping line Option',
        amount: 999
    }, {
        id: '2',
        description: 'Second shipping line Option',
        amount: 1500
    }
];

export const provinceMock: IProvince = {
    iso_code: 'test_iso_code',
    name: 'test_name',
    valid_for_shipping: true,
    valid_for_billing: true,
};

export const countryInformationMock: ICountryInformation = {
    iso_code: 'test_iso_code',
    name: 'test_name',
    show_province: true,
    province_label: 'test_province_label',
    show_postal_code: true,
    provinces: [provinceMock],
    valid_for_shipping: true,
    valid_for_billing: true,
};

export const supportedLanguages: ISupportedLanguage = {
    id: 6,
    shop_id: 6,
    iso_language: 'en',
    language_name: 'English',
    language_blob: '{"language_name":"English","terms":{"customer_information":{"already_have_an_account":"Already have an account with us?","customer_info":"Customer information","email":"Email","email_address":"Email address","email_address_placeholder":"Email address","enter_new_address":"Enter a new address","log_in":"Log in","not_you":"Not you?","return_to_cart":"Return to cart","accepts_marketing":"Subscribe to our newsletter"},"shipping_address":{"address2_field":"Apt, suite, etc.","address2_field_optional":"Apt, suite, etc. (optional)","address_field":"Address","city_field":"City","company_field":"Company","company_field_optional":"Company (optional)","cont_to_shipping":"Continue to shipping method","country_field":"Country","country_field_placeholder":"Choose a country","first_name_field":"First name","last_name_field":"Last name","optional":" (optional)","phone_field":"Phone","phone_field_optional":"Phone (optional)","postal_code_field":"Postal code","province":"Province","province_field":"Province","province_field_placeholder":"Choose a province","department":"Department","department_field":"Department","department_field_placeholder":"Choose a department","select_address":"Select an address","select_exist_address":"Select an existing address","shipping":"Shipping","shipping_address":"Shipping address","state":"State","state_field_placeholder":"Choose a state","state_territory_field":"State\\/Territory","state_territory_field_placeholder":"Choose a state\\/territory","zip_code":"Zip code","no_shipping_to_some_addresses":"This shop can\'t ship to some of your saved addresses"},"shipping_method":{"footer_shipping_continue":"Continue to payment method","footer_shipping_cust_info":"Return to customer information","shipping":"Shipping","shipping_method":"Shipping method","shipping_price_free":"Free","no_shipping_available":"No shipping options available for your location at this time. Please ensure your address is correct.","no_shipping_lines_available":"Sorry! There are currently no shipping rates available for your shipping details.","no_shipping_invalid_address":"To see shipping options, complete filling in your address above."},"payment_method":{"use_wallet_pay_or":"OR","use_wallet_pay_express_payment":"EXPRESS CHECKOUT","address2_field":"Apt, suite, etc.","address2_field_optional":"Apt, suite, etc. (optional)","address_field":"Address","apt_field":"Apt, suite, etc. (optional)","apt_label":"Apt, suite, etc.","billing_address":"Billing address","cancel_button":"Cancel","card_info":"Card information","card_number":"Card number","card_number_lower":"Card number","cc_dev_mode":"Credit card - test mode","cc_friendly_name":"Credit card","cc_friendly_name_lower":"Credit card","cc_number":"Credit card number","cc_number_lower":"Credit card number","city_field":"City","company_field":"Company","company_field_optional":"Company (optional)","complete_order":"Complete order","confirm_remove_card":"Are you sure you want to remove this credit card?","confirm_remove_gift_card":"Are you sure you want to remove this gift card?","confirm_remove_paypal":"Are you sure you want to remove this PayPal account?","country_field":"Country","country_field_placeholder":"Choose a country","change_payment_method":"Change payment method","cc_expiration":"Expiration date","cc_expiry":"Expiry date","credit_card_expiration":"MM \\/ YY","credit_card_expiration_full_year":"MM \\/ YYYY","cvv":"CVV","cvv_help":"The CVV Number (\\"Card Verification Value\\") on your credit card is a 3 digit number located on the back of VISA\\u00ae, MasterCard\\u00ae and Discover\\u00ae branded credit cards. On your American Express\\u00ae branded credit card, it is a 4 digit numeric code located on the front.","declined_cc_err":"Your card has been declined","different_account":"Use a different account","different_billing":"Use a different billing address","expired_cc_err":"Your card is expired","first_name_field":"First name","first_name_field_lower":"First name","gift_card":"Gift card","gift_card_friendly_name":"Gift card","gift_card_code":"Gift card code","gift_card_success":"Gift card added successfully.","invalid_cc_cvv_err":"Your CVV is invalid","invalid_cc_month_err":"Your expiry month is invalid","invalid_cc_num_err":"Your card number is invalid","invalid_cc_year_err":"Your expiry year is invalid","last_name_field":"Last name","last_name_field_lower":"Last name","month":"Month","no_payment_method": "No Payment Method","optional":" (optional)","payment_method":"Payment method","payment_method_lower":"Payment method","paypal":"PayPal","paypal_declined":"Payment declined.","creating_paypal_err":"Error creating Paypal Checkout","payment_gateway_loading_error":"Unable to retrieve payment method","phone_field":"Phone","phone_field_optional":"Phone (optional)","pin":"PIN","postal_code_field":"Postal code","province_field":"Province","province_field_placeholder":"Choose a province","remember_card":"Remember this credit card","remember_gift_card":"Remember this gift card","remember_paypal":"Remember this account","return_to_shipping":"Return to shipping method","same_as_shipping":"Same as shipping address","save_changes_button":"Save changes","select_new_pmt":"Select new payment method","state":"State","state_field_placeholder":"Choose a state","state_territory_field":"State\\/Territory","state_territory_field_placeholder":"Choose a state\\/territory","use_new_card":"Use a new card","use_stored_card":"Use a stored card","validate":"Validate","apply":"Apply","year":"Year","zip_code":"Zip code","Year is invalid":"Your expiry year is invalid","year_invalid":"Your expiry year is invalid","no_payment_methods_invalid_address":"To see payment options, complete filling in your address above.","sca_mandate":"I authorize {{name}} to send instructions to the financial institution that issued my card to take payments from my card account in accordance with the terms of my agreement with you.","financing_options_title":"Plan Terms"},"summary":{"amount_remaining":"Amount remaining","apply_discount_button":"Apply","currency_total":"Total","discount_code":"Discount code","discounts":"Discounts","fees":"Fees","hide_order_summary":"Hide order summary","items":"items","items_in_cart":"in your cart","payments":"Payments","shipping":"Shipping","show_order_summary":"Show order summary","subtotal":"Subtotal","summary":"Summary","taxes":"Taxes","total":"Total","quantity_label":"Qty"},"confirmation_page":{"billing_address":"Billing address","contact_us":"Contact us","customer_info":"Customer information","help":"Need Help?","keep_shopping":"Continue shopping","loading_header":"Processing order... ","loading_content":"This may take a few moments... Please remain on the page until the process is complete.","order_confirmed":"Your order is confirmed","payment_method":"Payment method","shipping_address":"Shipping address","shipping_method":"Shipping method","thank_you":"Thank you","order_confirmed_text":"We’ve accepted your order, and we’re getting it ready. A confirmation email has been sent to your email address.","need_help":"Need help? "},"out_of_stock":{"accept_changes":"Accept changes","inventory_issues":"Inventory issues","product_name_header":"Product name","product_quantity_header":"Quantity","quantity_unavailable":"Quantity unavailable","removed_item":"Removed item","return_to_cart":"Return to cart","sold_out":"Sold out","unavailable_products_message":"Some products became unavailable and your cart has been updated. We\'re sorry for the inconvenience."},"saved_payment_methods":{"default_card_selection_description":"These symbols indicate your current default payment methods.","new_credit_card":"New credit card","change_default_card":"Change defaults","previous_step":"Back","add_card_details":"Add your card details","use_card_as_default":"Use this as your default card","save_card":"Save card","credit_card_save_failed":"Card save failed ","credit_card_currency_selection_placeholder":"i.e: CAD","pick_card_currency":"Step 1: Pick the card\'s currency","search_for_currency":"Search for a currency","next_step":"Next","no_currency_chosen_error":"You need to choose a currency to continue","modal_confirm_ok":"OK","contact_payment_service_error":"There was an error contacting the payment service, please refresh the page.","edit_card":"Edit card","edit_billing_address":"Edit billing","paypal_account_added_at":"Added","confirm_remove_card":"Delete this card?","confirm_remove_account":"Delete this account?","retrieve_countries_error":"There was an error retrieving countries for the form, please try again.","card_remove_error":"Sorry your card could not be removed. Try again later! ","retrieve_currencies_error":"Sorry we had trouble with your chosen currency. Try again later!","credit_card_billing_info_title":"Credit card billing info","credit_card_save_success":"Card saved successfully","confirm_remove_button_cancel":"Keep","confirm_remove_button_accept":"Delete","card_updated":"Card updated","card_not_updated":"Card not updated","card_removed":"Card removed","paypal_account_removed":"PayPal account removed"},"error_messages":{"core_info":{"enter_email":"Please enter a valid email","first_name_required":"First name is required","last_name_required":"Last name is required"},"payment_gateway":{"all_cards_expired":"All of your cards are expired, please use a different one.","braintree_hosted_fields_empty":"You must fill out the card form to save a card. Please, try again","braintree_hosted_fields_invalid":"There was an error in the information you submitted. Please, correct and try again","braintree_instantiation_option_required":"There was an error contacting the payment service. Please, refresh the page","braintree_paypal_checkout_error":"Error creating PayPal Checkout","braintree_paypal_client_error":"Error creating Braintree client","braintree_paypal_general_error":"PayPal error has occurred","complete_address":"Please complete your address.","declined_cc_err":"Card declined. Please enter valid credit card information","declined_paypal_error":"PayPal payment has failed. Check your PayPal account for potential issues.","enter_cc":"Please enter a credit card number","enter_cvv":"Please enter a CVV","enter_expiry":"Please enter a valid expiration date","enter_month":"Please enter a month","enter_year":"Please enter a year","expired_cc_err":"Your card is expired","gift_card_duplicate":"You\'ve already entered this gift card. Please enter details for a different card.","header_cc_err":"An error has occurred with your payment","init_failed":"Failed to initialize a payment gateway","insufficient_funds":"There are insufficient funds to complete your order. Please select an additional payment type to cover the balance and try again.","insufficient_gift_card":"Gift card is empty. Please enter details for a new card.","invalid_cc_cvv_err":"Your CVV is invalid","invalid_cc_num_err":"Your card number is invalid","invalid_gift_card":"Invalid gift card. Please enter card details again","invalid_gift_card_currency":"This gift card is in a currency that isn\'t supported by our store. Please try entering a different card.","network_error":"An error occurred while processing your payment, please try again","payment_type_not_supported":"Payment type not supported","paypal_complete_order_err":"Please use PayPal Checkout to complete order","stored_card_cvv_invalid":"Your CVV is Invalid","stored_card_removed":"Unavailable because of too many failed attempts","stored_card_required":"A saved credit card is required to complete this purchase","tokenization_error":"There was an error with the credit card, please try again.","unknown_error":"There was an unknown error while processing your payment.","no_tax":"We are not able to calculate taxes on your order."},"shipping":{"enter_address":"Please enter an address","enter_city":"Please enter a city","enter_company":"Please enter a company","enter_country":"Please select a country","enter_first_name":"Please enter a first name","enter_last_name":"Please enter a last name","enter_phone_number":"Please enter a phone number","invalid_phone_number":"Enter a valid 10 digit phone number","invalid_postal_code":"Code not valid for country and province.","select_province":"Please select a province\\/state\\/territory","select_value":"Please select a value","unknown_error":"There was an unknown error while validating your shipping address.","billing_country_not_found":"Please enter a valid state\\/province","no_shipping_available":"No shipping options available for your location at this time. Please ensure your address is correct.","no_shipping_lines_available":"Sorry! There are currently no shipping rates available for your shipping details."},"discount_code":{"discounts_require_email":"An email address is required to validate discount codes","too_many_discounts":"Only one discount code is allowed per order","discounts_disabled":"Discount codes are temporarily not accepted","discounts_email_invalid":"The email address entered isn\'t allowed to use this code.","discount_code_conditions_invalid":"This discount code does not qualify for this order right now","used_by_customer":"The email address entered has already used this code","invalid_discount_code":"The discount code you\'ve entered is invalid","discount_code_error":"Please enter a valid discount code","require_shipping_page":"Please proceed to shipping page to reapply this discount code","unknown_error":"There was an unknown error while trying to apply your discount code."},"generic":{"bad_err":"something bad happened","fatal_err_content":"Error","fatal_err_header":"Looks like something went wrong...","fatal_err_subHeader":"We\'re working on a solution right now!","resolve_errors":"Please resolve the remaining errors.","unknown_error":"This application has encountered an error","process_order_error":"We did not receive confirmation your order was completed. Please contact us to verify the status of your order before trying again. We apologize for the inconvenience."},"google_recaptcha":{"verification":"Please verify that you are a human","unknown_error":"There was an unknown error with google recaptcha"},"captcha":{"captcha_required":"Complete the captcha to continue","unknown_error":"There was an unknown error while processing the captcha."},"tax":{"no_tax_zone_setup":"No tax zone is set up for your location at this time."}},"global":{"cart":"Cart","customer_info":"Customer information","footer_rights":"All rights reserved","payment_method":"Payment method","shipping_method":"Shipping method"}}}',
    is_default: true,
    out_of_date: 0,
    enabled: 1,
    source: null,
    created_at: '2021-06-18 19:27:35',
    updated_at: '2021-06-18 19:27:35',
    deleted_at: null,
    name: 'English',
    shop_language_id: 6
};

export const orderInitialDataMock: IOrderInitialData = {
    shop_name: 'test_shop_name',
    country_info: [countryInformationMock],
    supported_languages: [supportedLanguages],
    general_settings: {
        checkout_process: {
            company_name_option: 'required',
            phone_number_required: false,
            accepts_marketing_checkbox_option: 'checked'
        },
        address_autocomplete: {
            provider: null,
            api_key: null
        }
    },
    alternative_payment_methods: [
        {
            type: alternatePaymentMethodType.STRIPE,
            key: '',
            stripe_user_id: '',
            public_id: '',
            account_country: ''
        }
    ],
    external_payment_gateways: []
};

export const cssRuleMock: ICssRule = {
    cssText: '.ToggleField { color:red; }'
};

export const mediaRuleMock: IMediaRule = {
    conditionText: 'screen and (max-height: 600px)',
    cssRules: [cssRuleMock, cssRuleMock]
};

export const cssStylingPaymentIframeRequestMock: ICssStylingPaymentIframeRequest = {
    css_rules: [cssRuleMock, cssRuleMock],
    media_rules: [mediaRuleMock]
};

export const initializeOrderResponseMock: IInitializeOrderResponse = {
    initial_data: orderInitialDataMock,
    application_state: applicationStateMock,
    jwt_token: 'test_jwt_token',
    public_order_id: 'test_public_order_id',
};
