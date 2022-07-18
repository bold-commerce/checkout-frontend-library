import {getCurrency} from 'src';
import {setCurrency} from 'src/state';
import {applicationState} from 'src/variables';
import {currencyMock} from 'src/variables/mocks';

describe('get currency', () => {
    test('get mocked currency', () => {
        setCurrency(currencyMock);
        const result = getCurrency();
        expect(result).toStrictEqual(currencyMock);
    });

    test('should not alter currency', () => {
        const code = 'CAD';
        setCurrency(currencyMock);
        const result = getCurrency();

        expect(result).toStrictEqual(currencyMock);

        result.iso_code = code;

        expect(result.iso_code).toBe(code);
        expect(applicationState.customer.first_name).not.toBe(code);
    });
});
