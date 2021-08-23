import {getShipping} from 'src';
import {setShipping} from 'src/state';
import {applicationState} from 'src/variables';
import {shippingMock} from 'src/variables/mocks';

describe('get shipping lines', () => {
    test('get mocked shipping lines', () => {
        setShipping(shippingMock);
        const result = getShipping();
        expect(result).toStrictEqual(shippingMock);
    });

    test('should not alter shipping line', () => {
        const text = 'test';
        setShipping(shippingMock);
        const result = getShipping();

        expect(result).toStrictEqual(shippingMock);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result.select_shipping_line.description = text;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(result.select_shipping_line.description).toBe(text);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(applicationState.shipping.select_shipping_line.description).not.toBe(text);
    });
});
