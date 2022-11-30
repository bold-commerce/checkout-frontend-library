import {IAddress} from 'src';
import {applicationState} from 'src/variables';

export function getBillingAddress(): IAddress{
    return JSON.parse(JSON.stringify(applicationState.addresses.billing));
}
