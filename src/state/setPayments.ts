import {IPayment} from 'src';
import {payments} from 'src/variables';

export function setPayments(newPayments: Array<IPayment>): void {
    payments.length = 0;
    newPayments.forEach(payment => {
        payments.push(payment);
    });
}
