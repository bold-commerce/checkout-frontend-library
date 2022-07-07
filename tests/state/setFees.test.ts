import {IFees} from 'src';
import {setFees} from 'src/state';
import {applicationState} from 'src/variables';
import {feesMock} from 'src/variables/mocks';

describe('setFees', () => {
    test('Set Fees to application state', () => {
        const fees: Array<IFees> = [feesMock];

        setFees(fees);

        expect(applicationState.fees?.length).toBe(fees.length);
        expect(applicationState.fees).toStrictEqual(fees);
    });

    test('Set Fees with undefined', () => {
        const fees = undefined;

        setFees(fees);

        expect(applicationState.fees?.length).toBe(0);
        expect(applicationState.fees).toStrictEqual([]);
    });
});
