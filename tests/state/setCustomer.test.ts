import {setCustomer} from '@src/state';
import {applicationState, customer} from '@src/variables';
import {customerMock} from '@src/variables/mocks';

describe('setCustomer', () => {
    test('Set customer to application state', () => {

        setCustomer(customerMock);

        expect(customer).toStrictEqual(customerMock);
        expect(applicationState.customer).toStrictEqual(customerMock);
        expect(applicationState.customer.saved_addresses.length).toBe(1);
    });
});
