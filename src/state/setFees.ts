import {IFees} from 'src';
import {fees} from 'src/variables';

export function setFees(newFees: Array<IFees>|undefined ): void {
    fees.length = 0;
    newFees && newFees.forEach(fee => {
        fees.push(fee);
    });
}
