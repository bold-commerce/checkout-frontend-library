import {apiErrors, baseReturnObject, fetchAPI, FetchError} from 'src';
import {callFetch} from 'src/utils/fetchAPI';
import {Response} from 'node-fetch';

const url = 'https://example.com/users';
const options = {
    method: 'GET'
};

describe('test fetchAPI functionality', () => {
    const fetchMock = jest.fn();
    const serviceUnavailableStatus = 503;
    const serviceUnavailableImplementationJsonMock = () => Promise.resolve({
        json: () => Promise.resolve({}),
        ok: false,
        status: serviceUnavailableStatus,
        headers: {get: () => 'application/json'}
    });
    const serviceUnavailableImplementationTextMock = () => Promise.resolve({
        text: () => Promise.resolve(''),
        ok: false,
        status: serviceUnavailableStatus,
        headers: {get: () => 'text/html'}
    });
    let aPIReturnObjectMock = {...baseReturnObject};

    beforeEach(() => {
        jest.spyOn(global, 'setTimeout');
        fetchMock.mockReset();
        fetchMock.mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({}),
            ok: true,
            status: 200
        }));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.fetch = fetchMock;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.fetch = fetchMock;
        aPIReturnObjectMock = {...baseReturnObject};
    });

    describe('testing callFetch async function', () => {

        test('successful callFetch call', async () => {
            aPIReturnObjectMock.status = 200;
            aPIReturnObjectMock.success = true;
            aPIReturnObjectMock.response = {};
            const result = await callFetch(url,0, 0);

            expect(result).toEqual(aPIReturnObjectMock);
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });

        test('callFetch fails: response is undefined', async () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fetchMock.mockImplementationOnce(() => Promise.resolve());
            const { status } = apiErrors.general;

            const result = await callFetch(url, 0 ,0, options);

            expect(result.error).toBeInstanceOf(FetchError);
            expect((result.error as FetchError).status).toBe(status);
            expect((result.error as FetchError).message).toContain('TypeError');
        });

        test('callFetch fails: handles exception with message', async () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fetchMock.mockImplementationOnce(() => {throw new Error('Test exception was thrown');});
            const { status } = apiErrors.general;

            const result = await callFetch(url, 0, 0, options);

            expect(result.error).toBeInstanceOf(FetchError);
            expect((result.error as FetchError).status).toBe(status);
            expect((result.error as FetchError).message).toContain('Test exception');
            expect(fetchMock).toHaveBeenCalledWith(url, options);
        });

        test('callFetch fails: Service is unavailable & response.ok equals false & json header without retires', async () => {
            fetchMock.mockImplementationOnce(serviceUnavailableImplementationJsonMock);

            const result = await callFetch(url, 0, 0, options);

            expect((result.error as FetchError).status).toBe(serviceUnavailableStatus);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect((result.error as FetchError).message).toContain('Unable to process request');
        });

        test('callFetch fails: Service is unavailable & response.ok equals false & text header with retires', async () => {
            fetchMock
                .mockImplementationOnce(serviceUnavailableImplementationTextMock)
                .mockImplementationOnce(serviceUnavailableImplementationTextMock);

            const result = await callFetch(url, 1, 1, options);

            expect(fetchMock).toHaveBeenCalledTimes(2);
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect((result.error as FetchError).status).toBe(serviceUnavailableStatus);
            expect(result.error).toBeInstanceOf(FetchError);
            expect((result.error as FetchError).message).toContain('Unable to process request');
        });

        test('callFetch fails: Unprocessable Entity & response.ok equals false', async () => {
            const testStatus = 422;
            const bodyJson = {errors: [{message: 'Test Error message', type: '', field: '', severity: 'test', sub_type: ''}]};
            const body = JSON.stringify(bodyJson);
            const testResponse = new Response(body, {status: testStatus, headers: {'content-type': 'application/json'}});
            fetchMock.mockImplementationOnce(() => Promise.resolve(testResponse));

            const result = await callFetch(url,0 , 0, options);

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
            fetchMock.mockImplementation(serviceUnavailableImplementationJsonMock);

            await fetchAPI(url ,options, 10);
            expect(fetchMock).toHaveBeenCalledTimes(6);
            expect(setTimeout).toHaveBeenCalledTimes(6);
        });

        test('failed fetchAPI call: exception was thrown', async () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fetchMock.mockImplementationOnce(() => {throw new Error('Exception was thrown');});

            const result = await fetchAPI(url ,options);

            expect(result.success).toBe(false);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(result.response).toBe(null);
        });

        test('failed fetchAPI call: return contains 404 error', async () => {
            fetchMock.mockImplementationOnce(() => Promise.resolve({
                json: () => Promise.resolve({}),
                ok: false,
                status: 404
            }));

            const result = await fetchAPI(url, options, 0);

            expect(result.success).toBe(false);
            expect(result.error).toBeInstanceOf(FetchError);
            expect(result.response).toBe(null);
        });
    });
});
