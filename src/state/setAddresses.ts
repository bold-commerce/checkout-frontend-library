import {IAddressType} from 'src';
import {setBillingAddress, setShippingAddress} from 'src/state';

export function setAddresses({shipping, billing}: IAddressType): void {
    if(shipping) {
        setShippingAddress(shipping);
    }
    if(billing) {
        setBillingAddress(billing);
    }
}
