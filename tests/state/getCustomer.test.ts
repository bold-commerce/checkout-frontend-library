import {getCustomer} from 'src';
import {setCustomer} from 'src/state';
import {applicationState} from 'src/variables';
import {customerMock} from 'src/variables/mocks';

describe('get Customer', () => {
    test('get mocked customer', () => {
        setCustomer(customerMock);
        const result = getCustomer();
        expect(result).toStrictEqual(customerMock);
    });

    test('should not alter customer', () => {
        const text = 'test';
        setCustomer(customerMock);
        const result = getCustomer();

        expect(result).toStrictEqual(customerMock);

        result.first_name = text;

        expect(result.first_name).toBe(text);
        expect(applicationState.customer.first_name).not.toBe(text);
    });
});
