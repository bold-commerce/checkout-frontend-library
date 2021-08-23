import {getAddresses} from 'src';
import {setAddresses} from 'src/state';
import {applicationState} from 'src/variables';
import {addressesMock} from 'src/variables/mocks';

describe('get Addresses', () => {
    test('get mocked addresses', () => {
        setAddresses(addressesMock);
        const result = getAddresses();
        expect(result).toStrictEqual(addressesMock);
    });

    test('should not alter addresses', () => {
        const text = 'test';
        setAddresses(addressesMock);
        const result = getAddresses();

        expect(result).toStrictEqual(addressesMock);

        result.billing.first_name = text;

        expect(result.billing.first_name).toBe(text);
        expect(applicationState.addresses.billing.first_name).not.toBe(text);
    });
});
