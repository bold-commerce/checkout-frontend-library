import {setCurrency} from 'src/state';
import {applicationState, currency} from 'src/variables';
import {currencyMock} from 'src/variables/mocks';

describe('setCustomer', () => {
    test('Set customer to application state', () => {
        setCurrency(currencyMock);
        expect(currency).toStrictEqual(currencyMock);
        expect(applicationState.currency).toStrictEqual(currencyMock);
    });
});
