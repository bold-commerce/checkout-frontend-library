import {IPayment} from 'src';
import {applicationState} from 'src/variables';

export function getPayments(): Array<IPayment>{
    return JSON.parse(JSON.stringify(applicationState.payments));
}
