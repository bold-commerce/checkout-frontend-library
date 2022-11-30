import {ILineItem} from 'src';
import {line_items} from 'src/variables';

export function setLineItems(newLineItems: Array<ILineItem>): void {
    line_items.length = 0;
    newLineItems.forEach(item => {
        line_items.push(item);
    });
}
