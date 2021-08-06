import {IAddressType} from 'src';
import {applicationState} from 'src/variables';

export function getAddresses(): IAddressType{
    return JSON.parse(JSON.stringify(applicationState.addresses));
}
