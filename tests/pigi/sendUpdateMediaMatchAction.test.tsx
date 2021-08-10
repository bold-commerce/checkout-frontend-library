import {apiErrors, baseReturnObject, pigiActionTypes} from 'src/variables';
import {FetchError, IPigiActionType, sendUpdateMediaMatchAction} from 'src';
import * as sendAction from 'src/pigi/sendAction';

describe('Testing Pigi Update Media Match action', () => {
    const calledOnce = 1;
    let sendActionSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendActionSpy = jest.spyOn(sendAction, 'sendAction');
    });

    test('sendUpdateMediaMatchAction Error return', () => {
        const conditionText = 'screen and (min-width: 768px)';
        const matches = false;
        const payload = {conditionText, matches};
        const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH, payload};
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy.mockReturnValueOnce(falseReturnObject);

        const res = sendUpdateMediaMatchAction(conditionText, matches);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('sendUpdateMediaMatchAction Success return', () => {
        const conditionText = 'screen and (min-width: 768px)';
        const matches = false;
        const payload = {conditionText, matches};
        const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH, payload};
        const trueReturnObject = {...baseReturnObject};
        trueReturnObject.success = true;
        sendActionSpy.mockReturnValueOnce(trueReturnObject);

        const res = sendUpdateMediaMatchAction(conditionText, matches);

        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(trueReturnObject);
    });
});
