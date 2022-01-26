import {getBillingAddress} from 'src';
import {setBillingAddress} from 'src/state';
import {applicationState} from 'src/variables';
import {billingAddressMock} from 'src/variables/mocks';

describe('get Billing Address', () => {
    test('get mocked billing address', () => {
        setBillingAddress(billingAddressMock);
        const result = getBillingAddress();
        expect(result).toEqual(billingAddressMock);
    });

    test('should not alter billing address', () => {
        const text = 'test';
        setBillingAddress(billingAddressMock);
        const result = getBillingAddress();

        expect(result).toEqual(billingAddressMock);

        result.first_name = text;

        expect(result.first_name).toBe(text);
        expect(applicationState.addresses.billing.first_name).not.toBe(text);
    });
});
