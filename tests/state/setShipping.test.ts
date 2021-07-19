import {setShipping} from 'src/state';
import {applicationState} from 'src/variables';
import {shippingMock} from 'src/variables/mocks';

describe('setShipping', () => {
    test('Set Shipping to application state', () => {

        setShipping(shippingMock);

        expect(applicationState.shipping).toStrictEqual(shippingMock);
    });
});
