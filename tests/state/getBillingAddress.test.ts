import {applicationState} from 'src/variables';
import {setBillingAddress, getBillingAddress} from 'src/state';
import {billingAddressMock} from 'src/variables/mocks';

describe('get Billing Address', () => {
    test('get mocked billing address', () => {
        setBillingAddress(billingAddressMock);
        const result = getBillingAddress();
        expect(result).toStrictEqual(billingAddressMock);
    });

    test('should not alter billing address', () => {
        const text = 'test';
        setBillingAddress(billingAddressMock);
        const result = getBillingAddress();

        expect(result).toStrictEqual(billingAddressMock);

        result.first_name = text;

        expect(result.first_name).toBe(text);
        expect(applicationState.addresses.billing.first_name).not.toBe(text);
    });
});
