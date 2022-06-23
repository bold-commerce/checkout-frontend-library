import {IOrderInitialData} from 'src';
import {orderInitialData} from 'src/variables';

export function getOrderInitialData(): IOrderInitialData {
    return JSON.parse(JSON.stringify(orderInitialData));
}
