import {ITax} from '@src';
import {taxes} from '@src/variables';

export function setTaxes(newTaxes: Array<ITax>): void {
    taxes.length = 0;
    newTaxes.forEach(tax => {
        taxes.push(tax);
    });
}
