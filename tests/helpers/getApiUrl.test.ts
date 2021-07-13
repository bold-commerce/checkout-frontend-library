import {getApiUrl, IApiTypes} from '@src';
import * as getShopIdentifier from '@src/auth/getShopIdentifier';
import * as getPublicOrderId from '@src/auth/getPublicOrderId';
import * as getEnvironment from '@src/environment/getEnvironment';

describe('getApiUrl', () => {
    const shopId = 'shopId';
    const publicOrderId = 'publicOrderId';
    const env = { type: 'mockedEnvType', url: 'mockerEnvUrl', path: 'mockedEnvPath'};

    beforeEach(() => {
        const shopIdSpy = jest.spyOn(getShopIdentifier, 'getShopIdentifier');
        const publicOrderIdSpy = jest.spyOn(getPublicOrderId, 'getPublicOrderId');
        const envSpy = jest.spyOn(getEnvironment, 'getEnvironment');

        shopIdSpy.mockReturnValue(shopId);
        publicOrderIdSpy.mockReturnValue(publicOrderId);
        envSpy.mockReturnValue(env);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('Multiple getApiUrl Succeed', () => {
        const apiUrlDataProvider = [
            {
                testName: 'Test empty succeed',
                type: '',
                expectedUrl: `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}`,
            },
            {
                testName: 'Test sessionStart succeed',
                type: 'sessionStart',
                expectedUrl: `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}/session/start`,
            },
        ];

        apiUrlDataProvider.forEach( data => {
            test(data.testName, () => {
                const result = getApiUrl(data.type as keyof IApiTypes);

                expect(result).toBe(data.expectedUrl);
            });
        });
    });
});
