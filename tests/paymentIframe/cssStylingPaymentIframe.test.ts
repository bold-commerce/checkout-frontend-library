import {cssStylingPaymentIframe} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import {apiTypeKeys, baseReturnObject, methods} from 'src/variables';
import {cssStylingPaymentIframeRequestMock} from 'src/variables/mocks';
import * as apiResponse from 'src/utils/apiResponse';

describe('testing CSS Styling Payment Iframe api', () => {
    const returnObject = {...baseReturnObject};
    const timesWhenCalled = 1;
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/payments/styles';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({append: jest.fn()});
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValue(returnObject);
        returnObject.response = {
            data: {
                style_sheet: {
                    cssRules: cssStylingPaymentIframeRequestMock.css_rules,
                    mediaRules: cssStylingPaymentIframeRequestMock.media_rules
                }
            }
        };
        returnObject.success = true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('calling cssStylingPaymentIframe', async () => {
        const res = await cssStylingPaymentIframe(cssStylingPaymentIframeRequestMock);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.cssStylingPaymentIframe, cssStylingPaymentIframeRequestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.cssStylingPaymentIframe);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling cssStylingPaymentIframe w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};
        checkApiResponseSpy.mockReturnValueOnce(tempReturnObject);
        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await cssStylingPaymentIframe(cssStylingPaymentIframeRequestMock, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.cssStylingPaymentIframe, cssStylingPaymentIframeRequestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.cssStylingPaymentIframe);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(res).toStrictEqual(tempReturnObject);
    });
});

