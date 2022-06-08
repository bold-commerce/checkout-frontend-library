import {apiErrors, baseReturnObject, pigiActionTypes, FetchError, IPigiResponseType, sendDisplayErrorMessageAction, sendDisplayErrorMessageActionAsync} from 'src';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('testing send pigi Display Error Message Action', () => {
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;
    const message = 'message';
    const subType = 'sub_type';
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('calling sendDisplayErrorMessageAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendDisplayErrorMessageAction(message, subType);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendDisplayErrorMessageAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendDisplayErrorMessageAction(message, subType);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendDisplayErrorMessageActionAsync success', async () => {
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendDisplayErrorMessageActionAsync(message, subType);

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

