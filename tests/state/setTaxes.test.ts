import {ITax} from 'src';
import {setTaxes} from 'src/state';
import {applicationState} from 'src/variables';
import {taxMock} from 'src/variables/mocks';

describe('setTaxes', () => {
    test('Set Taxes to application state', () => {
        const taxes: Array<ITax> = [taxMock, taxMock, taxMock, taxMock];

        setTaxes(taxes);

        expect(applicationState.taxes.length).toBe(taxes.length);
        expect(applicationState.taxes).toStrictEqual(taxes);
    });
});
