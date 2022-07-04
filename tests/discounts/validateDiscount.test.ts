import {baseReturnObject, methods, validateDiscount, FetchError} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';

describe('testing validate discounts api', () => {
    const returnObject = {...baseReturnObject};
    const code = 'test_code';
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/discounts';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlWithParamsSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlWithParamsSpy = jest.spyOn(apiUrl, 'getApiUrlWithParams').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('calling validate discounts', async () => {
        returnObject.success = true;
        const res = await validateDiscount(code);
        expect(res).toStrictEqual(returnObject);
        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlWithParamsSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
    });

    test('calling add discounts w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');
        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));
        const res = await validateDiscount(code, 1);

        expect(res.success).toBe(false);
        expect(res.error).toBeInstanceOf(FetchError);
        expect((res.error as FetchError).status).toBe(422);
        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlWithParamsSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
    });

});
