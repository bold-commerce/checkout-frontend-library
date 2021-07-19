import {IAddressType} from 'src';
import {setBillingAddress, setShippingAddress} from 'src/state';

export function setAddresses({shipping, billing}: IAddressType): void {
    setShippingAddress(shipping);
    setBillingAddress(billing);
}
