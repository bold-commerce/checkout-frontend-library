import {FetchError, sendDisplayErrorMessageAction} from 'src';
import {apiErrors, baseReturnObject} from 'src/variables';
import * as sendAction from 'src/pigi/sendAction';

describe('testing send pigi Display Error Message Action', () => {
    let sendActionSpy: jest.SpyInstance;
    const message = 'message';
    const subType = 'sub_type';
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('calling sendDisplayErrorMessageAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendDisplayErrorMessageAction(message, subType);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendDisplayErrorMessageAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendDisplayErrorMessageAction(message, subType);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

