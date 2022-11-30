import {ILineItem} from 'src';
import {setLineItems} from 'src/state';
import {applicationState} from 'src/variables';
import {lineItemMock} from 'src/variables/mocks';

describe('setLineItems', () => {
    test('Set Line Items to application state', () => {
        const lineItems: Array<ILineItem> = [lineItemMock];

        setLineItems(lineItems);

        expect(applicationState.line_items.length).toBe(lineItems.length);
        expect(applicationState.line_items).toStrictEqual(lineItems);
    });
});
