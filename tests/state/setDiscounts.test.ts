import {IDiscount} from 'src';
import {setDiscounts} from 'src/state';
import {applicationState} from 'src/variables';
import {discountMock} from 'src/variables/mocks';

describe('setDiscounts', () => {
    test('Set Discounts to application state', () => {
        const discounts: Array<IDiscount> = [discountMock, discountMock, discountMock];

        setDiscounts(discounts);

        expect(applicationState.discounts.length).toBe(discounts.length);
        expect(applicationState.discounts).toStrictEqual(discounts);
    });
});
