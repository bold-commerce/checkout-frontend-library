import {FetchError, IPigiActionType, sendClearErrorMessageAction} from 'src';
import {apiErrors, baseReturnObject, pigiActionTypes} from 'src/variables';
import * as sendAction from 'src/pigi/sendAction';

describe('testing send pigi Clear Error Message Action', () => {
    let sendActionSpy: jest.SpyInstance;
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('calling sendClearErrorMessageAction success', () => {
        const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_CLEAR_ERROR_MESSAGES };
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendClearErrorMessageAction();

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendClearErrorMessageAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendClearErrorMessageAction();

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

