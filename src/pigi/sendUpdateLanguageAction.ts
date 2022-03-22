import {IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction} from 'src';
import {pigiActionTypes} from 'src/variables';
import { sendPigiActionAsync } from '.';

export function sendUpdateLanguageAction(languageCode: string): IApiReturnObject {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };
    return sendPigiAction(action);
}

export async function sendUpdateLanguageActionAsync(languageCode: string): Promise<IPigiResponseType> {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };
    return await sendPigiActionAsync(action);
}
