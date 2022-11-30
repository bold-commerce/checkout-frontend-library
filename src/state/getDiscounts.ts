import {IDiscount} from 'src';
import {applicationState} from 'src/variables';

export function getDiscounts(): Array<IDiscount>{
    return JSON.parse(JSON.stringify(applicationState.discounts));
}
