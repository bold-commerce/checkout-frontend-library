import {apiErrors, baseReturnObject, pigiActionTypes, FetchError, IPigiResponseType, sendRefreshOrderAction, sendRefreshOrderActionAsync} from 'src';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('testing send pigi Refresh Order Action', () => {
    const calledOnce = 1;
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('calling sendRefreshOrderAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendRefreshOrderAction();

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendRefreshOrderAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendRefreshOrderAction();

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendRefreshOrderActionAsync success', async () => {
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_REFRESH_ORDER,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendRefreshOrderActionAsync();

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

