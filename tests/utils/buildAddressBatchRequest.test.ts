import * as isObjectEmpty from 'src/utils/isObjectEmpty';
import * as isObjectEquals from 'src/utils/isObjectEquals';
import * as getShippingAddress from 'src/state/getShippingAddress';
import * as getBillingAddress from 'src/state/getBillingAddress';
import {billingAddressMock, shippingAddressMock} from 'src/variables/mocks';
import {apiTypeKeys, buildAddressBatchRequest} from 'src';

describe('buildAddressBatchRequest', () => {

    let getShippingAddressSpy: jest.SpyInstance;
    let getBillingAddressSpy: jest.SpyInstance;
    let isObjectEmptySpy: jest.SpyInstance;
    let isObjectEqualsSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.clearAllMocks();
        getShippingAddressSpy = jest.spyOn(getShippingAddress, 'getShippingAddress').mockReturnValue(shippingAddressMock);
        getBillingAddressSpy = jest.spyOn(getBillingAddress, 'getBillingAddress').mockReturnValue(billingAddressMock);
        isObjectEmptySpy = jest.spyOn(isObjectEmpty, 'isObjectEmpty');
        isObjectEqualsSpy = jest.spyOn(isObjectEquals, 'isObjectEquals');

    });

    const data = [
        {name: 'testing shipping with empty address', address: shippingAddressMock, type: 'shipping', isObjectEmpty: true, isObjectEquals: false, getShippingAddressSpyTimesCalled: 1, getBillingAddressSpyTimesCalled: 0,  expected: {apiType: apiTypeKeys.setShippingAddress, payload: shippingAddressMock} },
        {name: 'testing billing with empty address', address: billingAddressMock, type: 'billing', isObjectEmpty: true, isObjectEquals: false, getShippingAddressSpyTimesCalled: 0, getBillingAddressSpyTimesCalled: 1, expected: {apiType: apiTypeKeys.setBillingAddress, payload: billingAddressMock} },
        {name: 'testing shipping without empty address', address: shippingAddressMock, type: 'shipping', isObjectEmpty: false, isObjectEquals: false, getShippingAddressSpyTimesCalled: 1, getBillingAddressSpyTimesCalled: 0, expected: {apiType: apiTypeKeys.updateShippingAddress, payload: shippingAddressMock} },
        {name: 'testing billing without empty address', address: billingAddressMock, type: 'billing', isObjectEmpty: false, isObjectEquals: false, getShippingAddressSpyTimesCalled: 0, getBillingAddressSpyTimesCalled: 1, expected: {apiType: apiTypeKeys.updateBillingAddress, payload: billingAddressMock} },
        {name: 'testing shipping address with same address', address: shippingAddressMock, type: 'shipping', isObjectEmpty: false, isObjectEquals: true, getShippingAddressSpyTimesCalled: 1, getBillingAddressSpyTimesCalled: 0,  expected: null }
    ];

    test.each(data)( '$name', async ({address, type, isObjectEmpty, isObjectEquals, getBillingAddressSpyTimesCalled, getShippingAddressSpyTimesCalled,expected}) => {

        isObjectEmptySpy.mockReturnValueOnce(isObjectEmpty);
        isObjectEqualsSpy.mockReturnValueOnce(isObjectEquals);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = buildAddressBatchRequest(address, type);
        expect(result).toStrictEqual(expected);
        expect(getShippingAddressSpy).toHaveBeenCalledTimes(getShippingAddressSpyTimesCalled);
        expect(getBillingAddressSpy).toHaveBeenCalledTimes(getBillingAddressSpyTimesCalled);
    });

});
