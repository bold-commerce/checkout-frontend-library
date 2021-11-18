import {FetchError, sendHandleScaAction} from 'src';
import {apiErrors, baseReturnObject} from 'src/variables';
import * as sendAction from 'src/pigi/sendAction';

describe('testing send pigi Handle Sca Action', () => {
    let sendActionSpy: jest.SpyInstance;
    const clientSecretToken = 'string-for-secret-token';
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('calling sendHandleScaAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendHandleScaAction(clientSecretToken);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendHandleScaAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendHandleScaAction(clientSecretToken);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

