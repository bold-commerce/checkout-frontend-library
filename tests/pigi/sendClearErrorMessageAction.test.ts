import {
    apiErrors,
    baseReturnObject,
    pigiActionTypes,
    FetchError,
    IPigiResponseType,
    sendClearErrorMessageAction,
    sendClearErrorMessageActionAsync
} from 'src';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('testing send PIGI Clear Error Message Action', () => {
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('calling sendClearErrorMessageAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendClearErrorMessageAction();

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendClearErrorMessageAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendClearErrorMessageAction();

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendClearErrorMessageActionAsync success', async () => {
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_CLEAR_ERROR_MESSAGES,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendClearErrorMessageActionAsync();

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

