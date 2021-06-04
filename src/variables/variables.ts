import {Environment, Auth} from '../types';
import {environmentTypes, environmentUrls, environmentPath} from './constants';

export const environment: Environment = {
    type: environmentTypes.production,
    url: environmentUrls.production,
    path: environmentPath
};

export const auth: Auth = {
    shopIdentifier: '',
    publicOrderId: '',
    csrfToken: '',
    jwtToken: ''
};
