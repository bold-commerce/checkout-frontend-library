import {setShippingAddress} from 'src/state';
import {applicationState, shippingAddress} from 'src/variables';
import {emptyAddressMock, shippingAddressMock} from 'src/variables/mocks';
import {IAddress} from '../../src';

describe('setShippingAddress', () => {
    test('Set shipping to application state', () => {

        setShippingAddress(shippingAddressMock);

        expect(shippingAddress).toStrictEqual(shippingAddressMock);
        expect(applicationState.addresses.shipping).toStrictEqual(shippingAddressMock);
    });

    test('set shipping address with id', () => {
        const localMock = {...shippingAddressMock};
        localMock.id = '1';

        setShippingAddress(localMock);

        expect(shippingAddress).toStrictEqual(localMock);
        expect(applicationState.addresses.shipping).toStrictEqual(localMock);
    });

    test('set shipping address with empty array', () => {
        setShippingAddress({} as IAddress);

        expect(shippingAddress).toStrictEqual(emptyAddressMock);
        expect(applicationState.addresses.shipping).toStrictEqual(emptyAddressMock);
    });
});
