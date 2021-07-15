import {IPayment} from '@src';
import {setPayments} from '@src/state';
import {applicationState} from '@src/variables';
import {paymentMock} from '@src/variables/mocks';

describe('setPayments', () => {
    test('Set Payments to application state', () => {
        const payments: Array<IPayment> = [paymentMock, paymentMock];

        setPayments(payments);

        expect(applicationState.payments.length).toBe(payments.length);
        expect(applicationState.payments).toStrictEqual(payments);
    });
});
