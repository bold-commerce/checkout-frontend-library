import {
    IApiReturnObject, 
    IOrderInitialData, 
    IEnvironment, 
    setEnvironment, 
    sessionStart, 
    setJwtToken, 
    setPublicOrderId, 
    setShopIdentifier
} from 'src';

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
    setJwtToken(jwt);
    setPublicOrderId(publicOrderId);
    setShopIdentifier(shopIdentifier);
    setEnvironment(environment.type, environment.path, environment.url);
    //set initData in environment later

    return sessionStart();
}
