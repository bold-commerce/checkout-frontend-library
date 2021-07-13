import {getApiOptions, IApiTypes} from '@src';
import {apiTypes} from '@src/variables';

describe('multiple getApiOptions tests - success', () => {
    const apiOptionsDataProvider = [
        {
            testName: 'test empty type',
            type: '',
            body: {},
            expectedOptions: { method: 'GET', headers: {}, body: JSON.stringify({})},
        },
        {
            testName: 'test sessionStart - success',
            type: 'sessionStart',
            body: { test: '' },
            expectedOptions: { method: 'POST', headers: {}, body: JSON.stringify({ test: '' })},
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

    apiOptionsDataProvider.forEach(data => {
        test(data.testName, () => {
            const response = getApiOptions(data.type as keyof IApiTypes, data.body);

            expect(response).toMatchObject(data.expectedOptions);
        });
    });
});
