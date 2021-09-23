import {setBillingAddress} from 'src/state';
import {applicationState, billingAddress} from 'src/variables';
import {billingAddressMock} from 'src/variables/mocks';

describe('setBillingAddress', () => {
    test('Set billing to application state', () => {

        setBillingAddress(billingAddressMock);

        expect(billingAddress).toStrictEqual(billingAddressMock);
        expect(applicationState.addresses.billing).toStrictEqual(billingAddressMock);
    });

    test('set billing address with id', () => {
        const localMock = {...billingAddressMock};
        localMock.id = '1';

        setBillingAddress(localMock);

        expect(billingAddress).toStrictEqual(localMock);
        expect(applicationState.addresses.billing).toStrictEqual(localMock);
    });
});
