import {IApiReturnObject, IPigiActionType, sendAction} from 'src';
import {pigiActionTypes} from 'src/variables';

export function sendUpdateLanguageAction(languageCode: string): IApiReturnObject {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };
    return sendAction(action);
}
