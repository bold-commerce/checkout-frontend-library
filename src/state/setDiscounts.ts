import {IDiscount} from '@src';
import {discounts} from '@src/variables';

export function setDiscounts(newDiscounts: Array<IDiscount>): void {
    discounts.length = 0;
    newDiscounts.forEach(discount => {
        discounts.push(discount);
    });
}
