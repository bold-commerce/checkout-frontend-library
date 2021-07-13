import {IEnvironment, IAuth} from '../types';
import {environmentTypes, environmentUrls, environmentPath} from './constants';

export const environment: Required<IEnvironment> = {
    type: environmentTypes.production,
    url: environmentUrls.production,
    path: environmentPath
};

export const auth: IAuth = {
    shopIdentifier: '',
    publicOrderId: '',
    csrfToken: '',
    jwtToken: ''
};
