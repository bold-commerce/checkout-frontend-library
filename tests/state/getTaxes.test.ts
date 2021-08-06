import {applicationState} from 'src/variables';
import {getTaxes, setTaxes} from 'src/state';
import {taxesArrayMock} from 'src/variables/mocks';

describe('get Taxes', () => {
    test('get mocked taxes', () => {
        setTaxes(taxesArrayMock);
        const result = getTaxes();
        expect(result).toStrictEqual(taxesArrayMock);
    });

    test('should not alter taxes', () => {
        const text = 'test';
        setTaxes(taxesArrayMock);
        const result = getTaxes();

        expect(result).toStrictEqual(taxesArrayMock);

        result[0].name = text;

        expect(result[0].name).toBe(text);
        expect(applicationState.taxes[0].name).not.toBe(text);
    });
});
