import {IAddressType} from 'src';
import {setBillingAddress, setShippingAddress} from 'src/state';

export function setAddresses({shipping, billing}: IAddressType): void {
    if(Object.keys(shipping).length > 0) {
        setShippingAddress(shipping);
    }
    if(Object.keys(billing).length > 0) {
        setBillingAddress(billing);
    }
}
