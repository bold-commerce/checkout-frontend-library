import {setAddresses} from '@src/state';
import * as setShippingAddress from '@src/state/setShippingAddress';
import * as setBillingAddress from '@src/state/setBillingAddress';
import {applicationState, billingAddress, shippingAddress} from '@src/variables';
import {billingAddressMock, shippingAddressMock} from '@src/variables/mocks';

describe('setAddresses', () => {
    let setShippingAddressSpy: jest.SpyInstance;
    let setBillingAddressSpy: jest.SpyInstance;

    beforeEach(() => {
        setShippingAddressSpy = jest.spyOn(setShippingAddress, 'setShippingAddress');
        setBillingAddressSpy = jest.spyOn(setBillingAddress, 'setBillingAddress');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Set Shipping to application state', () => {

        setAddresses({shipping: shippingAddressMock, billing: billingAddressMock});

        expect(setShippingAddressSpy).toHaveBeenCalledTimes(1);
        expect(setShippingAddressSpy).toHaveBeenCalledWith(shippingAddressMock);
        expect(shippingAddress).toStrictEqual(shippingAddressMock);
        expect(applicationState.addresses.shipping).toStrictEqual(shippingAddressMock);
        expect(setBillingAddressSpy).toHaveBeenCalledTimes(1);
        expect(setBillingAddressSpy).toHaveBeenCalledWith(billingAddressMock);
        expect(billingAddress).toStrictEqual(billingAddressMock);
        expect(applicationState.addresses.billing).toStrictEqual(billingAddressMock);
    });
});
