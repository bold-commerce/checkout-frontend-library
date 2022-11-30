import {IAddress} from 'src';
import {applicationState} from 'src/variables';

export function getShippingAddress(): IAddress{
    return JSON.parse(JSON.stringify(applicationState.addresses.shipping));
}
