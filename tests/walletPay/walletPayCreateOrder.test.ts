import {
    apiTypeKeys,
    baseReturnObject,
    methods,
    IWalletPayCreateOrderRequest,
    IWalletPayCreateOrderResponse,
    walletPayCreateOrder
} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import {applicationStateMock} from 'src/variables/mocks';
import * as apiResponse from 'src/utils/apiResponse';

describe('testing create payment gateway order ', () => {
    const returnObject = {...baseReturnObject};
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/wallet-pay/create-order';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    const initPaymentPayload: IWalletPayCreateOrderRequest = {
        payment_data: {
            payment_type: 'paypal',
            locale: 'en-US',
        },
        gateway_type: 'paypal'
    };

    const response: IWalletPayCreateOrderResponse = {
        payment_data: {id: '1234'},
        application_state: applicationStateMock
    };

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({append: jest.fn()});
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValue(returnObject);
        returnObject.response = {data: response};
        returnObject.success = true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('calling init Payment', async () => {
        const res = await walletPayCreateOrder(initPaymentPayload);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayCreateOrder, initPaymentPayload);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayCreateOrder);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling addPayment w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};
        checkApiResponseSpy.mockReturnValueOnce(tempReturnObject);
        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await walletPayCreateOrder(initPaymentPayload, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayCreateOrder, initPaymentPayload);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayCreateOrder);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(res).toStrictEqual(tempReturnObject);
    });
});

