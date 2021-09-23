import {getApiUrl, getApiUrlWithParams, IApiTypes} from 'src';
import * as getShopIdentifier from 'src/auth/getShopIdentifier';
import * as getPublicOrderId from 'src/auth/getPublicOrderId';
import * as getEnvironment from 'src/environment/getEnvironment';

describe('getApiUrl', () => {
    const shopId = 'shopId';
    const publicOrderId = 'publicOrderId';
    const env = { type: 'mockedEnvType', url: 'https://mockerEnvUrl.com', path: 'mockedEnvPath'};

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
                testName: 'Test addGuestCustomer succeed',
                type: 'addGuestCustomer',
                expectedUrl: `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}/customer/guest`,
            },
        ];

        apiUrlDataProvider.forEach( data => {
            test(data.testName, () => {
                const result = getApiUrl(data.type as keyof IApiTypes);

                expect(result).toBe(data.expectedUrl);
            });
        });
    });

    describe('Multiple getApiUrlWithParams succeed', () => {
        const apiUrlWithParamsDataProvider = [
            {
                testName: 'Test validate Email endpoint succeed',
                type: 'validateEmail',
                params: {email_address: 'testEmail@hotmail.com'},
                expectedUrl: `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}/validate_email_address`,
            },
        ];
        jest.restoreAllMocks();
        apiUrlWithParamsDataProvider.forEach(data => {
            test(data.testName, () => {
                const result = getApiUrlWithParams(data.type as keyof IApiTypes, data.params);

                const expectedUrl = new URL(data.expectedUrl);
                expectedUrl.search = new URLSearchParams(data.params).toString();

                expect(result).toBe(expectedUrl.toString());
            });
        });
    });
});
