import {
    apiTypeKeys,
    baseReturnObject,
    methods,
    IWalletPayOnApproveRequest,
    IWalletPayOnApproveResponse,
    walletPayOnApprove
} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import {applicationStateMock} from 'src/variables/mocks';
import * as apiResponse from 'src/utils/apiResponse';

describe('testing wallet pay on approve testing ', () => {
    const returnObject = {...baseReturnObject};
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/wallet-pay/on-approve';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    const paymentPayload: IWalletPayOnApproveRequest = {
        payment_data: {
            payment_type: 'paypal',
            locale: 'en-US',
            paypal_order_id: '12344'
        },
        gateway_type: 'paypal'
    };

    const response: IWalletPayOnApproveResponse = {
        payment_data: {},
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
        const res = await walletPayOnApprove(paymentPayload);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayOnApprove, paymentPayload);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayOnApprove);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling addPayment w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};
        checkApiResponseSpy.mockReturnValueOnce(tempReturnObject);
        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await walletPayOnApprove(paymentPayload, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayOnApprove, paymentPayload);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.walletPayOnApprove);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(res).toStrictEqual(tempReturnObject);
    });
});

