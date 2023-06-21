import {getSubrequestApiOptions, IApiTypes} from 'src';
import {Headers} from 'node-fetch';
import {auth} from 'src/variables';

describe('multiple getSubRequests tests - success', () => {
    const apiOptionsDataProvider = [
        {
            testName: 'test empty type',
            type: '',
            body: {},
            expectedOptions: {
                endpoint: 'https://api.boldcommerce.com/checkout/storefront//',
                method: 'GET',
                payload: null,
            },
        },
        {
            testName: 'test updateCustomer - success',
            type: 'updateCustomer',
            body: { token: '' },
            expectedOptions: {
                endpoint: 'https://api.boldcommerce.com/checkout/storefront///customer',
                method: 'PUT',
                payload: JSON.stringify({token: ''})
            },
        }];

    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.Headers = Headers;
        auth.jwtToken = 'test.jwt.token';
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Test with addGuestCustomer ', () => {
        const type = 'addGuestCustomer';

        const expectedResult = { method: 'POST', endpoint: 'https://api.boldcommerce.com/checkout/storefront///customer/guest', payload: JSON.stringify({ test: '' })};

        const response = getSubrequestApiOptions(type as keyof IApiTypes, JSON.parse(expectedResult.payload));

        expect(response).toStrictEqual(expectedResult);
    });

    test('Test with validateEmail ', () => {
        const type = 'validateEmail';

        const expectedResult = { method: 'GET', endpoint: 'https://api.boldcommerce.com/checkout/storefront///validate_email_address', payload: JSON.stringify({ test: 'someemail@boldcommerce.com' })};

        const response = getSubrequestApiOptions(type as keyof IApiTypes, JSON.parse(expectedResult.payload));

        expect(response).toStrictEqual(expectedResult);
    });

    test('Test with no body', () => {
        const type = 'getPaymentIframe';
        const expectedResult = { method: 'GET', endpoint:'https://api.boldcommerce.com/checkout/storefront///payments/iframe', payload: null};

        const response = getSubrequestApiOptions(type as keyof IApiTypes);

        expect(response).toStrictEqual(expectedResult);
    });

    apiOptionsDataProvider.forEach(data => {
        test(data.testName, () => {
            const response = getSubrequestApiOptions(data.type as keyof IApiTypes, data.body);

            expect(response).toStrictEqual(data.expectedOptions);
        });
    });
});
