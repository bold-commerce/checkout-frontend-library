import {getShippingAddress} from 'src';
import {setShippingAddress} from 'src/state';
import {applicationState} from 'src/variables';
import {shippingAddressMock} from 'src/variables/mocks';

describe('get Shipping Address', () => {
    test('get mocked shipping addresses', () => {
        setShippingAddress(shippingAddressMock);
        const result = getShippingAddress();
        expect(result).toStrictEqual(shippingAddressMock);
    });

    test('should not alter Shipping address', () => {
        const text = 'test';
        setShippingAddress(shippingAddressMock);
        const result = getShippingAddress();

        expect(result).toStrictEqual(shippingAddressMock);

        result.first_name = text;

        expect(result.first_name).toBe(text);
        expect(applicationState.addresses.shipping.first_name).not.toBe(text);
    });
});
