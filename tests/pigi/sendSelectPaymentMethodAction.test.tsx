import {
    apiErrors,
    baseReturnObject,
    pigiActionTypes,
    FetchError,
    IPigiResponseType,
    sendSelectPaymentMethodAction,
    sendSelectPaymentMethodActionAsync
} from 'src';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('Testing Pigi Select Payment Method action', () => {
    const calledOnce = 1;
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('sendSelectPaymentMethodAction Error return', () => {
        const payload = {index: 1, gatewayName: 'test'};
        const action = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(falseReturnObject);

        const res = sendSelectPaymentMethodAction(payload);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendPigiActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('sendSelectPaymentMethodAction Success return', () => {
        const payload = {index: 1, gatewayName: 'test'};
        const action = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};
        const trueReturnObject = {...baseReturnObject};
        trueReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(trueReturnObject);

        const res = sendSelectPaymentMethodAction(payload);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendPigiActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(trueReturnObject);
    });

    test('calling sendSelectPaymentMethodActionAsync success', async () => {
        const payload = {index: 1, gatewayName: 'test'};
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendSelectPaymentMethodActionAsync(payload);

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});
