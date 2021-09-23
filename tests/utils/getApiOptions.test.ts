import {getApiOptions, IApiTypes} from 'src';
import {Headers} from 'node-fetch';
import {apiTypes, auth} from 'src/variables';

describe('multiple getApiOptions tests - success', () => {
    const apiOptionsDataProvider = [
        {
            testName: 'test empty type',
            type: '',
            body: {},
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            expectedOptions: {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {}, // Overwritten by new Headers() call in the test function
                body: null
            },
        },
        {
            testName: 'test updateGuestCustomer - success',
            type: 'updateGuestCustomer',
            body: { token: '' },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer test.jwt.token',
            },
            expectedOptions: {
                method: 'PUT',
                mode: 'cors',
                credentials: 'include',
                headers: {}, // Overwritten by new Headers() call in the test function
                body: JSON.stringify({token: ''})
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

    test('Test with useJwt true', () => {
        const type = 'addGuestCustomer';
        apiTypes[type].useJwt = true;
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer test.jwt.token',
        });

        const expectedResult = { method: 'POST', mode: 'cors', credentials: 'include', headers, body: JSON.stringify({ test: '' })};

        const response = getApiOptions(type as keyof IApiTypes, JSON.parse(expectedResult.body));

        expect(response).toStrictEqual(expectedResult);
    });

    test('Test with useJwt false', () => {
        const type = 'addGuestCustomer';
        apiTypes[type].useJwt = false;
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });

        const expectedResult = { method: 'POST', mode: 'cors', credentials: 'include', headers, body: JSON.stringify({ test: '' })};

        const response = getApiOptions(type as keyof IApiTypes, JSON.parse(expectedResult.body));

        expect(response).toStrictEqual(expectedResult);
    });

    test('Test with no body', () => {
        const type = 'getPaymentIframe';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        const expectedResult = { method: 'GET', mode: 'cors', credentials: 'include', headers, body: null};

        const response = getApiOptions(type as keyof IApiTypes);

        expect(response).toStrictEqual(expectedResult);
    });

    apiOptionsDataProvider.forEach(data => {
        test(data.testName, () => {
            data.expectedOptions.headers = new Headers(data.headers as Record<string, string>);
            const response = getApiOptions(data.type as keyof IApiTypes, data.body);

            expect(response).toStrictEqual(data.expectedOptions);
        });
    });
});
