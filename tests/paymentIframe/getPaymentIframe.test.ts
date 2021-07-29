import {getPaymentIframeUrl} from 'src';
import {baseReturnObject} from 'src/variables';
import * as getShopIdentifier from 'src/auth/getShopIdentifier';
import * as getPublicOrderId from 'src/auth/getPublicOrderId';
import * as getEnvironment from 'src/environment/getEnvironment';
import * as getJwtToken from 'src/auth/getJwtToken';

describe('testing getPaymentIframe - expected Url', () => {
    const shopId = 'shopId';
    const jwtToken = 'jwtToken';
    const publicOrderId = 'publicOrderId';
    const env = { type: 'mockedEnvType', url: 'https://mockerenvurl.com', path: 'mockedEnvPath'};

    beforeEach(() => {
        const shopIdSpy = jest.spyOn(getShopIdentifier, 'getShopIdentifier');
        const publicOrderIdSpy = jest.spyOn(getPublicOrderId, 'getPublicOrderId');
        const jwtTokenSpy = jest.spyOn(getJwtToken, 'getJwtToken');
        const envSpy = jest.spyOn(getEnvironment, 'getEnvironment');

        shopIdSpy.mockReturnValue(shopId);
        jwtTokenSpy.mockReturnValue(jwtToken);
        publicOrderIdSpy.mockReturnValue(publicOrderId);
        envSpy.mockReturnValue(env);
    });

    test('successful call (200)', async () => {
        const res = await getPaymentIframeUrl();
        expect(res.success).toBe(true);
    });
    test('testing getPaymentIframe - validating URL', async () => {
        const url = `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}/payments/iframe?token=${jwtToken}`;
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.response = {data: {url}};
        const res = await getPaymentIframeUrl();

        expect(res.success).toBe(true);
        expect(res.response).toStrictEqual(tempReturnObject.response);
    });
});
