import {setShippingAddress} from 'src/state';
import {applicationState, shippingAddress} from 'src/variables';
import {shippingAddressMock} from 'src/variables/mocks';

describe('setShippingAddress', () => {
    test('Set shipping to application state', () => {

        setShippingAddress(shippingAddressMock);

        expect(shippingAddress).toStrictEqual(shippingAddressMock);
        expect(applicationState.addresses.shipping).toStrictEqual(shippingAddressMock);
    });
});
