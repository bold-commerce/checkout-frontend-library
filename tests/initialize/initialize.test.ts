import {initialize, IApiReturnObject, IFetchError} from 'src';
import fetchMock from 'fetch-mock-jest';
import {environmentUrls, environmentTypes, apiErrors} from 'src/variables';

describe('testing initialize function', () => {
    const url = `${environmentUrls.staging}/checkout/storefront/shopIdentifier/publicOrderId/session/start`;
    const initData = {shopName: '', countryInformation: undefined, supportedLanguages: ['']};

    beforeAll(() => {
        fetchMock
            .get(url, {})
            .post(url, {
                data: {
                    csrf_token: 'testCSRF'
                }});
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
    });

    test('successful initialize', async () => {

        const response = await initialize(initData, 'jwt', 'publicOrderId', 'shopIdentifier', { type: environmentTypes.staging });
    
        expect((response as IApiReturnObject).success).toBe(true); 
        expect((response as IApiReturnObject).response).toEqual({ data: { csrf_token: 'testCSRF' } }); 
    });

    test('failed initalize: fetch error thrown', async () => {
        fetchMock
            .postOnce(url, { throws: 'Test exception was thrown'}, { overwriteRoutes: true });
        const { status } = apiErrors.general;

        const response = await initialize(initData, 'jwt', 'publicOrderId', 'shopIdentifier', { type: environmentTypes.staging });

        const errorContent = (response as IApiReturnObject).error as IFetchError;

        expect((response as IApiReturnObject).success).toBe(false); 
        expect(errorContent.status).toBe(status); 
        expect(errorContent.message).toContain('Test exception was thrown'); 
    });

    test('failed initalize: response is undefined', async () => {
        fetchMock
            .postOnce(url, {}, { response: undefined, overwriteRoutes: true });
        const { status } = apiErrors.general;

        const response = await initialize(initData, 'jwt', 'publicOrderId', 'shopIdentifier', { type: environmentTypes.staging });

        const errorContent = (response as IApiReturnObject).error as IFetchError;

        expect((response as IApiReturnObject).success).toBe(false);
        expect(errorContent.status).toBe(status);
        expect(errorContent.message).toContain('TypeError: Cannot read property \'then\' of undefined');
        
    });
});
