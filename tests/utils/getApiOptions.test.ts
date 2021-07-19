import {getApiOptions, IApiTypes} from 'src';
import {apiTypes} from 'src/variables';

describe('multiple getApiOptions tests - success', () => {
    const apiOptionsDataProvider = [
        {
            testName: 'test empty type',
            type: '',
            body: {token: ''},
            expectedOptions: { method: 'GET', headers: {}, body: JSON.stringify({token: ''})},
        },
        {
            testName: 'test sessionStart - success',
            type: 'sessionStart',
            body: { token: '' },
            expectedOptions: { method: 'POST', headers: {}, body: JSON.stringify({token: ''})},
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

        const expectedResult = { method: 'POST', headers: {}, body: JSON.stringify({ test: '' })};

        const response = getApiOptions(type as keyof IApiTypes, JSON.parse(expectedResult.body));

        expect(response).toMatchObject(expectedResult);
    });
    test('edge case: empty test with no body', () => {
        const type = 'sessionStart';
        const expectedResult = { method: 'POST', headers: {}};

        const response = getApiOptions(type as keyof IApiTypes);

        expect(response).toMatchObject(expectedResult);
    });

    apiOptionsDataProvider.forEach(data => {
        test(data.testName, () => {
            const response = getApiOptions(data.type as keyof IApiTypes, data.body);

            expect(response).toMatchObject(data.expectedOptions);
        });
    });
});
