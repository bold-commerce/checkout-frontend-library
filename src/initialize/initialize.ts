import {IApiReturnObject, IOrderInitialData, IEnvironment} from '../types';
import * as auth from '../auth';
import {setEnvironment} from '@src';
import {sessionStart} from './sessionStart';

/**
 * # Initialize
 * 
 * Initializes a checkout session using a variety of environment variables
 * 
 * @param initData initial data from /init API call
 * @param jwt Json web token which will be traded for a CSRF token
 * @param publicOrderId Order ID for the order
 * @param shopIdentifier Identification for the shop in which the order is on
 */
export async function initialize(initData: IOrderInitialData, jwt: string, publicOrderId: string, shopIdentifier: string, environment: IEnvironment): Promise<IApiReturnObject> { 
    auth.setJwtToken(jwt);
    auth.setPublicOrderId(publicOrderId);
    auth.setShopIdentifier(shopIdentifier);
    setEnvironment(environment.type, environment.path, environment.url);
    //set initData in environment later

    return sessionStart();
}
