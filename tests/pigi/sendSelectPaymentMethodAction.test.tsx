import {apiErrors, baseReturnObject, pigiActionTypes} from 'src/variables';
import {FetchError, sendSelectPaymentMethodAction} from 'src';
import * as sendAction from 'src/pigi/sendAction';

describe('Testing Pigi Select Payment Method action', () => {
    const calledOnce = 1;
    let sendActionSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('sendSelectPaymentMethodAction Error return', () => {
        const payload = {index: 1, gatewayName: 'test'};
        const action = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(falseReturnObject);

        const res = sendSelectPaymentMethodAction(payload);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('sendSelectPaymentMethodAction Success return', () => {
        const payload = {index: 1, gatewayName: 'test'};
        const action = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};
        const trueReturnObject = {...baseReturnObject};
        trueReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(trueReturnObject);

        const res = sendSelectPaymentMethodAction(payload);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(trueReturnObject);
    });
});
