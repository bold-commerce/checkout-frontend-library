import {setApplicationState} from '@src/state';
import * as setCustomer from '@src/state/setCustomer';
import * as setAddresses from '@src/state/setAddresses';
import * as setLineItems from '@src/state/setLineItems';
import * as setTaxes from '@src/state/setTaxes';
import * as setDiscounts from '@src/state/setDiscounts';
import * as setPayments from '@src/state/setPayments';
import * as setOrderMetaData from '@src/state/setOrderMetaData';
import * as setShipping from '@src/state/setShipping';
import {applicationState} from '@src/variables';
import {applicationStateMock} from '@src/variables/mocks';

describe('setApplicationState', () => {
    let setCustomerSpy: jest.SpyInstance;
    let setAddressesSpy: jest.SpyInstance;
    let setLineItemsSpy: jest.SpyInstance;
    let setTaxesSpy: jest.SpyInstance;
    let setDiscountsSpy: jest.SpyInstance;
    let setPaymentsSpy: jest.SpyInstance;
    let setOrderMetaDataSpy: jest.SpyInstance;
    let setShippingSpy: jest.SpyInstance;

    beforeEach(() => {
        setCustomerSpy = jest.spyOn(setCustomer, 'setCustomer');
        setAddressesSpy = jest.spyOn(setAddresses, 'setAddresses');
        setLineItemsSpy = jest.spyOn(setLineItems, 'setLineItems');
        setTaxesSpy = jest.spyOn(setTaxes, 'setTaxes');
        setDiscountsSpy = jest.spyOn(setDiscounts, 'setDiscounts');
        setPaymentsSpy = jest.spyOn(setPayments, 'setPayments');
        setOrderMetaDataSpy = jest.spyOn(setOrderMetaData, 'setOrderMetaData');
        setShippingSpy = jest.spyOn(setShipping, 'setShipping');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Set application state', () => {
        const callTimes = 1;

        setApplicationState(applicationStateMock);

        expect(setCustomerSpy).toHaveBeenCalledTimes(callTimes);
        expect(setAddressesSpy).toHaveBeenCalledTimes(callTimes);
        expect(setLineItemsSpy).toHaveBeenCalledTimes(callTimes);
        expect(setTaxesSpy).toHaveBeenCalledTimes(callTimes);
        expect(setDiscountsSpy).toHaveBeenCalledTimes(callTimes);
        expect(setPaymentsSpy).toHaveBeenCalledTimes(callTimes);
        expect(setOrderMetaDataSpy).toHaveBeenCalledTimes(callTimes);
        expect(setShippingSpy).toHaveBeenCalledTimes(callTimes);

        expect(setCustomerSpy).toHaveBeenCalledWith(applicationStateMock.customer);
        expect(setAddressesSpy).toHaveBeenCalledWith(applicationStateMock.addresses);
        expect(setLineItemsSpy).toHaveBeenCalledWith(applicationStateMock.line_items);
        expect(setTaxesSpy).toHaveBeenCalledWith(applicationStateMock.taxes);
        expect(setDiscountsSpy).toHaveBeenCalledWith(applicationStateMock.discounts);
        expect(setPaymentsSpy).toHaveBeenCalledWith(applicationStateMock.payments);
        expect(setOrderMetaDataSpy).toHaveBeenCalledWith(applicationStateMock.order_meta_data);
        expect(setShippingSpy).toHaveBeenCalledWith(applicationStateMock.shipping);

        expect(applicationState.order_total).toBe(applicationStateMock.order_total);
        expect(applicationState).toStrictEqual(applicationStateMock);
    });
});
