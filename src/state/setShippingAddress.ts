import {IAddress} from 'src';
import {shippingAddress} from 'src/variables';

export function setShippingAddress({
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
    shippingAddress.id = id ? id : undefined;
    shippingAddress.first_name = first_name ? first_name : '';
    shippingAddress.last_name = last_name ? last_name : '';
    shippingAddress.address_line_1 = address_line_1 ? address_line_1 : '';
    shippingAddress.address_line_2 = address_line_2 ? address_line_2 : '';
    shippingAddress.country = country ? country : '';
    shippingAddress.city = city ? city : '';
    shippingAddress.province = province ? province : '';
    shippingAddress.country_code = country_code ? country_code : '';
    shippingAddress.province_code = province_code ? province_code : '';
    shippingAddress.postal_code = postal_code ? postal_code : '';
    shippingAddress.business_name = business_name ? business_name : '';
    shippingAddress.phone_number = phone_number ? phone_number : '';
}
