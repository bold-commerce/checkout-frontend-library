import {applicationState} from 'src/variables';
import {getLineItems, setLineItems} from 'src/state';
import {lineItemMock} from 'src/variables/mocks';

describe('get Line items', () => {
    test('get mocked line items', () => {
        setLineItems([lineItemMock]);
        const result = getLineItems();
        expect(result).toStrictEqual([lineItemMock]);
    });

    test('should not alter line items', () => {
        const text = 'test';
        setLineItems([lineItemMock]);
        const result = getLineItems();

        expect(result).toStrictEqual([lineItemMock]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result[0].product_data.id = text;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(result[0].product_data.id).toBe(text);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(applicationState.line_items[0].product_data.id).not.toBe(text);
    });
});
