import {getApiOptions, IApiTypes} from 'src';
import {apiTypes} from 'src/variables';

describe('multiple getApiOptions tests - success', () => {
    const apiOptionsDataProvider = [
        {
            testName: 'test empty type',
            type: '',
            body: {},
            expectedOptions: {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {}, // Overwritten by new Headers() call in the test function
                body: null
            },
        },
        {
            testName: 'test sessionStart - success',
            type: 'sessionStart',
            body: { token: '' },
            expectedOptions: {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {}, // Overwritten by new Headers() call in the test function
                body: JSON.stringify({token: ''})
            },
        }];

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('edge case: test sessionStart with useCsrf = true', () => {
        const type = 'sessionStart';
        apiTypes[type].useCsrf = true;
        const headers = new Headers({'Content-Type': 'application/json'});

        const expectedResult = { method: 'POST', mode: 'cors', credentials: 'include', headers, body: JSON.stringify({ test: '' })};

        const response = getApiOptions(type as keyof IApiTypes, JSON.parse(expectedResult.body));

        expect(response).toStrictEqual(expectedResult);
    });

    test('edge case: empty test with no body', () => {
        const type = 'sessionStart';
        const headers = new Headers({'Content-Type': 'application/json'});
        const expectedResult = { method: 'POST', mode: 'cors', credentials: 'include', headers, body: null};

        const response = getApiOptions(type as keyof IApiTypes);

        expect(response).toStrictEqual(expectedResult);
    });

    apiOptionsDataProvider.forEach(data => {
        test(data.testName, () => {
            data.expectedOptions.headers = new Headers({'Content-Type': 'application/json'});
            const response = getApiOptions(data.type as keyof IApiTypes, data.body);

            expect(response).toStrictEqual(data.expectedOptions);
        });
    });
});
