import {setAddresses} from 'src/state';
import * as setShippingAddress from 'src/state/setShippingAddress';
import * as setBillingAddress from 'src/state/setBillingAddress';
import {applicationState, billingAddress, shippingAddress} from 'src/variables';
import {billingAddressMock, emptyAddressMock, shippingAddressMock} from 'src/variables/mocks';
import {IAddress} from 'src';

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

    test('Set address to application state with empty object', () => {

        setAddresses({shipping:{} as IAddress , billing: {} as IAddress});

        expect(setShippingAddressSpy).toHaveBeenCalledTimes(1);
        expect(setShippingAddressSpy).toHaveBeenCalledWith({});
        expect(shippingAddress).toStrictEqual(emptyAddressMock);
        expect(applicationState.addresses.shipping).toStrictEqual(emptyAddressMock);
        expect(setBillingAddressSpy).toHaveBeenCalledTimes(1);
        expect(setBillingAddressSpy).toHaveBeenCalledWith({});
        expect(billingAddress).toStrictEqual(emptyAddressMock);
        expect(applicationState.addresses.billing).toStrictEqual(emptyAddressMock);
    });

    test('Set address to application state with null object', () => {

        setAddresses({shipping: null as unknown as IAddress , billing: null as unknown as IAddress});

        expect(setShippingAddressSpy).toHaveBeenCalledTimes(0);
        expect(setBillingAddressSpy).toHaveBeenCalledTimes(0);
    });
});
