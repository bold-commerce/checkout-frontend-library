import {FetchError, sendRefreshOrderAction} from 'src';
import {apiErrors, baseReturnObject} from 'src/variables';
import * as sendAction from 'src/pigi/sendAction';

describe('testing send pigi Refresh Order Action', () => {
    const calledOnce = 1;
    let sendActionSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('calling sendRefreshOrderAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendRefreshOrderAction();

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendRefreshOrderAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendRefreshOrderAction();

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

