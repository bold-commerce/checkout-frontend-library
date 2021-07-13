import {setBillingAddress} from '@src/state';
import {applicationState, billingAddress} from '@src/variables';
import {billingAddressMock} from '@src/variables/mocks';

describe('setBillingAddress', () => {
    test('Set billing to application state', () => {

        setBillingAddress(billingAddressMock);

        expect(billingAddress).toStrictEqual(billingAddressMock);
        expect(applicationState.addresses.billing).toStrictEqual(billingAddressMock);
    });
});
