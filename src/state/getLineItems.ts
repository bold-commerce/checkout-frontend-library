import {ILineItem} from 'src';
import {applicationState} from 'src/variables';

export function getLineItems(): Array<ILineItem>{
    return JSON.parse(JSON.stringify(applicationState.line_items));
}
