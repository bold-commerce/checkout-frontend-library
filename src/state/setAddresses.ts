import {IAddressType} from 'src';
import {setBillingAddress, setShippingAddress} from 'src/state';
import {billingAddress, shippingAddress} from 'src/variables';

export function setAddresses({shipping, billing}: IAddressType): void {
    const shipAddress = shipping ? shipping : shippingAddress;
    const billAddress = billing ? billing : billingAddress;
    setShippingAddress(shipAddress);
    setBillingAddress(billAddress);
}
