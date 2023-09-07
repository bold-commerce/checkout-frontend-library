import {setApplicationState} from 'src/state';
import * as setCustomer from 'src/state/setCustomer';
import * as setAddresses from 'src/state/setAddresses';
import * as setLineItems from 'src/state/setLineItems';
import * as setTaxes from 'src/state/setTaxes';
import * as setDiscounts from 'src/state/setDiscounts';
import * as setPayments from 'src/state/setPayments';
import * as setOrderMetaData from 'src/state/setOrderMetaData';
import * as setShipping from 'src/state/setShipping';
import * as setFees from 'src/state/setFees';
import * as setCurrency from 'src/state/setCurrency';
import * as setDisplayCurrency from 'src/state/setDisplayCurrency';
import {applicationState} from 'src/variables';
import {applicationStateMock} from 'src/variables/mocks';

describe('setApplicationState', () => {
    let setDisplayCurrencySpy: jest.SpyInstance;
    let setCustomerSpy: jest.SpyInstance;
    let setAddressesSpy: jest.SpyInstance;
    let setLineItemsSpy: jest.SpyInstance;
    let setTaxesSpy: jest.SpyInstance;
    let setDiscountsSpy: jest.SpyInstance;
    let setPaymentsSpy: jest.SpyInstance;
    let setOrderMetaDataSpy: jest.SpyInstance;
    let setShippingSpy: jest.SpyInstance;
    let setFeesSpy: jest.SpyInstance;
    let setCurrencySpy: jest.SpyInstance;

    beforeEach(() => {
        setCustomerSpy = jest.spyOn(setCustomer, 'setCustomer');
        setAddressesSpy = jest.spyOn(setAddresses, 'setAddresses');
        setLineItemsSpy = jest.spyOn(setLineItems, 'setLineItems');
        setTaxesSpy = jest.spyOn(setTaxes, 'setTaxes');
        setDiscountsSpy = jest.spyOn(setDiscounts, 'setDiscounts');
        setPaymentsSpy = jest.spyOn(setPayments, 'setPayments');
        setOrderMetaDataSpy = jest.spyOn(setOrderMetaData, 'setOrderMetaData');
        setShippingSpy = jest.spyOn(setShipping, 'setShipping');
        setFeesSpy = jest.spyOn(setFees, 'setFees');
        setCurrencySpy = jest.spyOn(setCurrency, 'setCurrency');
        setDisplayCurrencySpy = jest.spyOn(setDisplayCurrency, 'setDisplayCurrency');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Set application state', () => {

        setApplicationState(applicationStateMock);

        expect(setCustomerSpy).toHaveBeenCalledTimes(1);
        expect(setAddressesSpy).toHaveBeenCalledTimes(1);
        expect(setLineItemsSpy).toHaveBeenCalledTimes(1);
        expect(setTaxesSpy).toHaveBeenCalledTimes(1);
        expect(setDiscountsSpy).toHaveBeenCalledTimes(1);
        expect(setPaymentsSpy).toHaveBeenCalledTimes(1);
        expect(setOrderMetaDataSpy).toHaveBeenCalledTimes(1);
        expect(setShippingSpy).toHaveBeenCalledTimes(1);
        expect(setFeesSpy).toHaveBeenCalledTimes(1);
        expect(setCurrencySpy).toHaveBeenCalledTimes(1);
        expect(setDisplayCurrencySpy).toHaveBeenCalledTimes(1);

        expect(setCustomerSpy).toHaveBeenCalledWith(applicationStateMock.customer);
        expect(setAddressesSpy).toHaveBeenCalledWith(applicationStateMock.addresses);
        expect(setLineItemsSpy).toHaveBeenCalledWith(applicationStateMock.line_items);
        expect(setTaxesSpy).toHaveBeenCalledWith(applicationStateMock.taxes);
        expect(setDiscountsSpy).toHaveBeenCalledWith(applicationStateMock.discounts);
        expect(setPaymentsSpy).toHaveBeenCalledWith(applicationStateMock.payments);
        expect(setOrderMetaDataSpy).toHaveBeenCalledWith(applicationStateMock.order_meta_data);
        expect(setShippingSpy).toHaveBeenCalledWith(applicationStateMock.shipping);
        expect(setFeesSpy).toHaveBeenCalledWith(applicationStateMock.fees);
        expect(setCurrencySpy).toHaveBeenCalledWith(applicationStateMock.currency);
        expect(setDisplayCurrencySpy).toHaveBeenCalledWith(applicationStateMock.display_currency);

        expect(applicationState.order_total).toBe(applicationStateMock.order_total);
        expect(applicationState.resumable_link).toBe(applicationStateMock.resumable_link);
        expect(applicationState.created_via).toBe(applicationStateMock.created_via);
        expect(applicationState.is_processed).toBe(applicationStateMock.is_processed);
        expect(applicationState).toStrictEqual(applicationStateMock);
    });

    test('Set application state no display currency', () => {

        const applicationStateMock2 = applicationState;
        delete applicationStateMock2.display_currency;
        delete applicationStateMock2.display_exchange_rate;
        setApplicationState(applicationStateMock2);

        expect(setCustomerSpy).toHaveBeenCalledTimes(1);
        expect(setAddressesSpy).toHaveBeenCalledTimes(1);
        expect(setLineItemsSpy).toHaveBeenCalledTimes(1);
        expect(setTaxesSpy).toHaveBeenCalledTimes(1);
        expect(setDiscountsSpy).toHaveBeenCalledTimes(1);
        expect(setPaymentsSpy).toHaveBeenCalledTimes(1);
        expect(setOrderMetaDataSpy).toHaveBeenCalledTimes(1);
        expect(setShippingSpy).toHaveBeenCalledTimes(1);
        expect(setFeesSpy).toHaveBeenCalledTimes(1);
        expect(setCurrencySpy).toHaveBeenCalledTimes(1);
        expect(setDisplayCurrencySpy).toHaveBeenCalledTimes(0);

        expect(setCustomerSpy).toHaveBeenCalledWith(applicationStateMock2.customer);
        expect(setAddressesSpy).toHaveBeenCalledWith(applicationStateMock2.addresses);
        expect(setLineItemsSpy).toHaveBeenCalledWith(applicationStateMock2.line_items);
        expect(setTaxesSpy).toHaveBeenCalledWith(applicationStateMock2.taxes);
        expect(setDiscountsSpy).toHaveBeenCalledWith(applicationStateMock2.discounts);
        expect(setPaymentsSpy).toHaveBeenCalledWith(applicationStateMock2.payments);
        expect(setOrderMetaDataSpy).toHaveBeenCalledWith(applicationStateMock2.order_meta_data);
        expect(setShippingSpy).toHaveBeenCalledWith(applicationStateMock2.shipping);
        expect(setFeesSpy).toHaveBeenCalledWith(applicationStateMock2.fees);
        expect(setCurrencySpy).toHaveBeenCalledWith(applicationStateMock2.currency);

        expect(applicationState.order_total).toBe(applicationStateMock2.order_total);
        expect(applicationState.resumable_link).toBe(applicationStateMock2.resumable_link);
        expect(applicationState.created_via).toBe(applicationStateMock2.created_via);
        expect(applicationState.is_processed).toBe(applicationStateMock2.is_processed);
        expect(applicationState).toStrictEqual(applicationStateMock2);
    });
});
