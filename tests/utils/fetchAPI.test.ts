import {fetchAPI, FetchError} from 'src';
import {apiErrors} from 'src/variables';
import {callFetch} from 'src/utils/fetchAPI';
import fetchMock from 'fetch-mock-jest';

const url = 'https://example.com/users';
const options = {
    method: 'GET'
};

describe('test fetchAPI functionality', () => {

    beforeEach(() => {
        fetchMock.mockReset();
        fetchMock
            .get(url, {})
            .post(url, {});
    });

    describe('testing callFetch async function', () => {

        test('successful callFetch call', async () => {

            const result = await callFetch(url);

            expect(result).toEqual({});
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });

        test('callFetch fails: response is undefined', async () => {
            fetchMock
                .getOnce(url, {}, { response: undefined, overwriteRoutes: true });
            const { status } = apiErrors.general;

            const result = await callFetch(url, options);

            expect(result).toBeInstanceOf(FetchError);
            expect((result as FetchError).status).toBe(status); 
            expect((result as FetchError).message).toContain('TypeError');
        });

        test('callFetch fails: handles exception with message', async () => {
            fetchMock
                .getOnce(url, { throws: 'Test exception was thrown'}, { overwriteRoutes: true });
            const { status } = apiErrors.general;

            const result = await callFetch(url, options);

            expect(result).toBeInstanceOf(FetchError);
            expect((result as FetchError).status).toBe(status); 
            expect((result as FetchError).message).toContain('Test exception');
            expect(fetchMock).toHaveBeenCalledWith(url, options);

        });

        test('callFetch fails: Service is unavailable & response.ok equals false', async () => {
            const testStatus = 503;
            fetchMock
                .getOnce(url, testStatus, { overwriteRoutes: true });

            const result = await callFetch(url, options);

            expect((result as FetchError).status).toBe(testStatus);
            expect(result).toBeInstanceOf(FetchError);
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect((result as FetchError).message).toContain('status is invalid');
        });
    });

    describe('Testing public fetchAPI function', () => {

        test('successful fetchAPI call with callback', () => {
            const callback = jest.fn();

            fetchAPI(url, undefined, callback).then(() => {
                expect(callback.mock.calls.length).toBe(1);
                expect(callback.mock.calls[0].length).toBe(1);
                expect(callback.mock.calls[0][0]).toStrictEqual({success: true, error: null, response: { }});
            });
        });

        test('failed fetchAPI call: exception was thrown', async () => {
            fetchMock
                .getOnce(url, { throws: 'Exception was thrown'}, { overwriteRoutes: true});

            const result = await fetchAPI(url, options);

            expect(result.success).toBe(false);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(result.response).toBe(null);
        });

        test('failed fetchAPI call: return contains 404 error', async () => {
            fetchMock
                .getOnce(url, 404, { overwriteRoutes: true });

            const result = await fetchAPI(url, options);

            expect(result.success).toBe(false);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(result.response).toBe(null);
        });
    });
});
