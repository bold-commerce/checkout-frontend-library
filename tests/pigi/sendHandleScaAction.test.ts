import {apiErrors, baseReturnObject, pigiActionTypes, FetchError, IPigiResponseType, sendHandleScaAction, sendHandleScaActionAsync} from 'src';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('testing send pigi Handle Sca Action', () => {
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;
    const clientSecretToken = 'string-for-secret-token';
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('calling sendHandleScaAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendHandleScaAction(clientSecretToken);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendHandleScaAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendHandleScaAction(clientSecretToken);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });


    test('calling sendHandleScaActionAsync success', async () => {
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_HANDLE_SCA,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendHandleScaActionAsync();

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

