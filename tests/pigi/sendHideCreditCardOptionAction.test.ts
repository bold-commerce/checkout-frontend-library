import {apiErrors, baseReturnObject, pigiActionTypes, FetchError, IPigiResponseType, sendHideCreditCardOptionAction, sendHideCreditCardOptionActionAsync} from 'src';
import {pigi} from 'src/variables';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('testing send PIGI Hide Credit Card Action', () => {
    pigi.iFrameId = 'PIGI';
    const calledOnce = 1;
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;
    const expectedAction = { actionType: pigiActionTypes.PIGI_HIDE_CREDIT_CARD_OPTION };

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('calling sendAddPaymentAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendHideCreditCardOptionAction();

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendPigiActionSpy).toHaveBeenCalledWith(expectedAction);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendHideCreditCardOptionAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendHideCreditCardOptionAction();

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendAddPaymentActionAsync success', async () => {
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_HIDE_CREDIT_CARD_OPTION,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendHideCreditCardOptionActionAsync();

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendPigiActionAsyncSpy).toHaveBeenCalledWith(expectedAction);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

