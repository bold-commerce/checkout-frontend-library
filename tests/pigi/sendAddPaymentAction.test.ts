import {FetchError, sendAddPaymentAction} from 'src';
import {apiErrors, baseReturnObject, pigi} from 'src/variables';
import * as sendAction from 'src/pigi/sendAction';

describe('testing send PIGI Add Payment Action', () => {
    pigi.iFrameId = 'PIGI';
    const calledOnce = 1;
    let sendActionSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('calling sendAddPaymentAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendAddPaymentAction();

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendAddPaymentAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(tempReturnObject);

        const res = sendAddPaymentAction();

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

