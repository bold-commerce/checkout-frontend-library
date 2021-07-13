import {ICustomer} from '@src';
import {customer} from '@src/variables';

export function setCustomer({
    platform_id,
    public_id,
    first_name,
    last_name,
    email_address,
    saved_addresses
}: ICustomer): void {
    customer.platform_id = platform_id;
    customer.public_id = public_id;
    customer.first_name = first_name;
    customer.last_name = last_name;
    customer.email_address = email_address;
    customer.saved_addresses = saved_addresses;
}
