import {
    IApiReturnObject,
    IInitializeOrderResponse,
    IEnvironment,
    setEnvironment,
    sessionStart,
    setJwtToken,
    setPublicOrderId,
    setShopIdentifier,
    checkApiResponse,
} from 'src';
import {baseReturnObject, keysToTestFromResponse} from 'src/variables';

/**
 * # Initialize
 *
 * Initializes a checkout session using a variety of environment variables
 *
 * @param initData initial data from /init API call
 * @param shopIdentifier Identification for the shop in which the order is on
 * @param environment Set the environment where the library will be working on.
 */
export async function initialize(initData: IInitializeOrderResponse, shopIdentifier: string, environment: IEnvironment): Promise<IApiReturnObject> {
    const {jwt_token: jwt, public_order_id: publicOrderId} = initData;
    const returnObject = {...baseReturnObject};
    returnObject.success = true;
    returnObject.response = initData;
    const keysToCheck = [keysToTestFromResponse.applicationState, keysToTestFromResponse.initial_data, keysToTestFromResponse.jwt_token, keysToTestFromResponse.public_order_id];
    const returnValue = checkApiResponse(returnObject, keysToCheck);
    if(!returnValue.success) {
        return returnValue;
    }
    setJwtToken(jwt);
    setPublicOrderId(publicOrderId);
    setShopIdentifier(shopIdentifier);
    setEnvironment(environment.type, environment.path, environment.url);
    return sessionStart();
}
