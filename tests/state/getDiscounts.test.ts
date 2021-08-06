import {applicationState} from 'src/variables';
import {getDiscounts, setDiscounts} from 'src/state';
import {discountMock} from 'src/variables/mocks';

describe('get Discounts', () => {
    test('get mocked discount', () => {
        setDiscounts([discountMock]);
        const result = getDiscounts();
        expect(result).toStrictEqual([discountMock]);
    });

    test('should not alter discount', () => {
        const text = 'test';
        setDiscounts([discountMock]);
        const result = getDiscounts();

        expect(result).toStrictEqual([discountMock]);

        result[0].code = text;

        expect(result[0].code).toBe(text);
        expect(applicationState.discounts[0].code).not.toBe(text);
    });
});
