import {
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
    IShipping
} from 'src';
import {environmentTypes, environmentUrls, environmentPath} from 'src/variables';

export const environment: Required<IEnvironment> = {
    type: environmentTypes.production,
    url: environmentUrls.production,
    path: environmentPath
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
    saved_addresses: []
};

export const shippingAddress: IAddress = {
    id: '',
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
    id: '',
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
        amount: 0
    },
    available_shipping_lines: [],
    taxes: [],
    discounts: []
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
};
