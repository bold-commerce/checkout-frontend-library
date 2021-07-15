import {IAddress} from '@src';
import {billingAddress} from '@src/variables';

export function setBillingAddress({
    id,
    first_name,
    last_name,
    address_line_1,
    address_line_2,
    country,
    city,
    province,
    country_code,
    province_code,
    postal_code,
    business_name,
    phone_number
}: IAddress): void {
    billingAddress.id = id;
    billingAddress.first_name = first_name;
    billingAddress.last_name = last_name;
    billingAddress.address_line_1 = address_line_1;
    billingAddress.address_line_2 = address_line_2;
    billingAddress.country = country;
    billingAddress.city = city;
    billingAddress.province = province;
    billingAddress.country_code = country_code;
    billingAddress.province_code = province_code;
    billingAddress.postal_code = postal_code;
    billingAddress.business_name = business_name;
    billingAddress.phone_number = phone_number;
}
