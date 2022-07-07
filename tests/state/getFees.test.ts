import {setFees} from 'src/state';
import {getFees} from 'src';
import {applicationState} from 'src/variables';
import {feesMock} from 'src/variables/mocks';

describe('get Fees', () => {
    test('get mocked fees', () => {
        setFees([feesMock]);
        const result = getFees();
        expect(result).toStrictEqual([feesMock]);
    });

    test('should not alter fees', () => {
        const text = 'test';
        setFees([feesMock]);
        const result = getFees();

        expect(result).toStrictEqual([feesMock]);

        result[0].line_text = text;

        const appFees = applicationState.fees? applicationState.fees[0] : undefined;

        expect(result[0].line_text).toBe(text);
        expect(appFees?.line_text).not.toBe(text);
    });
});
