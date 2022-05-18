import {fetchAPI, FetchError} from 'src';
import {apiErrors, baseReturnObject} from 'src/variables';
import {callFetch} from 'src/utils/fetchAPI';
import fetchMock from 'fetch-mock-jest';
import {Response} from 'node-fetch';

const url = 'https://example.com/users';
const options = {
    method: 'GET'
};

describe('test fetchAPI functionality', () => {
    let aPIReturnObjectMock = {...baseReturnObject};

    beforeEach(() => {
        aPIReturnObjectMock = {...baseReturnObject};
        fetchMock.mockReset();
        fetchMock
            .get(url, {})
            .post(url, {});
    });

    describe('testing callFetch async function', () => {

        test('successful callFetch call', async () => {
            aPIReturnObjectMock.status = 200;
            aPIReturnObjectMock.success = true;
            aPIReturnObjectMock.response = {};
            const result = await callFetch(url,0);

            expect(result).toEqual(aPIReturnObjectMock);
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });

        test('callFetch fails: response is undefined', async () => {
            fetchMock
                .getOnce(url, {}, { response: undefined, overwriteRoutes: true });
            const { status } = apiErrors.general;

            const result = await callFetch(url, 0 ,options);

            expect(result.error).toBeInstanceOf(FetchError);
            expect((result.error as FetchError).status).toBe(status);
            expect((result.error as FetchError).message).toContain('TypeError');
        });


        test('callFetch fails: handles exception with message', async () => {
            fetchMock
                .getOnce(url, { throws: 'Test exception was thrown'}, { overwriteRoutes: true });
            const { status } = apiErrors.general;

            const result = await callFetch(url, 0, options);

            expect(result.error).toBeInstanceOf(FetchError);
            expect((result.error as FetchError).status).toBe(status);
            expect((result.error as FetchError).message).toContain('Test exception');
            expect(fetchMock).toHaveBeenCalledWith(url, options);

        });

        test('callFetch fails: Service is unavailable & response.ok equals false without retires', async () => {
            const testStatus = 503;
            fetchMock
                .getOnce(url, testStatus, { overwriteRoutes: true });

            const result = await callFetch(url, 0, options);

            expect((result.error as FetchError).status).toBe(testStatus);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect((result.error as FetchError).message).toContain('Unable to process request');
        });

        test('callFetch fails: Service is unavailable & response.ok equals false with retires', async () => {
            const testStatus = 503;
            fetchMock.get(url, testStatus, { overwriteRoutes: true });

            const result = await callFetch(url, 1, options);

            expect(fetchMock).toHaveBeenCalledTimes(2);
            expect((result.error as FetchError).status).toBe(testStatus);
            expect(result.error).toBeInstanceOf(FetchError);
            expect((result.error as FetchError).message).toContain('Unable to process request');
        });

        test('callFetch fails: Unprocessable Entity & response.ok equals false', async () => {
            const testStatus = 422;
            const bodyJson = {errors: [{message: 'Test Error message', type: '', field: '', severity: 'test', sub_type: ''}]};
            const body = JSON.stringify(bodyJson);
            const testResponse = new Response(body, {status: testStatus, headers: {'content-type': 'application/json'}});
            fetchMock
                .getOnce(url, testResponse, { overwriteRoutes: true });

            const result = await callFetch(url,0 , options);

            expect((result.error as FetchError).status).toBe(testStatus);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect((result.error as FetchError).message).toContain('Unable to process request');
            expect((result.error as FetchError).body).toStrictEqual(bodyJson);
        });
    });

    describe('Testing public fetchAPI function', () => {

        test('successful fetchAPI call with callback', () => {
            const callback = jest.fn();

            fetchAPI(url, undefined, 0 ,callback).then(() => {
                expect(callback.mock.calls.length).toBe(1);
                expect(callback.mock.calls[0].length).toBe(1);
                expect(callback.mock.calls[0][0]).toStrictEqual({status: 200, success: true, error: null, response: { }});
            });
        });

        test('successful fetchAPI call with 10 retries', async () => {
            const testStatus = 503;
            fetchMock.get(url, testStatus, { overwriteRoutes: true });

            await fetchAPI(url ,options, 10);
            expect(fetchMock).toHaveBeenCalledTimes(6);

        });

        test('failed fetchAPI call: exception was thrown', async () => {
            fetchMock
                .getOnce(url, { throws: 'Exception was thrown'}, { overwriteRoutes: true});

            const result = await fetchAPI(url ,options);

            expect(result.success).toBe(false);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(result.response).toBe(null);
        });

        test('failed fetchAPI call: return contains 404 error', async () => {
            fetchMock
                .getOnce(url, 404, { overwriteRoutes: true });

            const result = await fetchAPI(url, options, 0);

            expect(result.success).toBe(false);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(result.response).toBe(null);
        });
    });
});
