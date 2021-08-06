import {applicationState} from 'src/variables';
import {getPayments, setPayments} from 'src/state';
import {paymentMock} from 'src/variables/mocks';

describe('get Payments', () => {
    test('get mocked payments', () => {
        setPayments([paymentMock]);
        const result = getPayments();
        expect(result).toStrictEqual([paymentMock]);
    });

    test('should not alter payments', () => {
        const text = 'test';
        setPayments([paymentMock]);
        const result = getPayments();

        expect(result).toStrictEqual([paymentMock]);

        result[0].type= text;

        expect(result[0].type).toBe(text);
        expect(applicationState.payments[0].type).not.toBe(text);
    });
});
