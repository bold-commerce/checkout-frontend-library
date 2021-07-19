import {sessionStart, IFetchError, IApiReturnObject} from 'src';
import {baseReturnObject} from 'src/variables';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';

describe('testing session start api', () => {
    const returnObject = {...baseReturnObject};
    const fetchMockRes = { data: { csrf_token: 'testCSRF' }};
    returnObject.response = fetchMockRes;
    returnObject.success = true;
    jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue({});
    const fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));

    test('calling sessionStart', async () => {
        const res = await sessionStart();

        expect(res).toEqual(returnObject);
    });
    test('calling sessionStart w/ success = false', async () => {
        const tempReturnObject = {...returnObject};
        
        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));
        
        const res = await sessionStart();
        
        expect(res).toEqual(tempReturnObject);
    });
    
    test('fetch successful but no response', async () => {
        const tempReturnObject = {...returnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = null;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await sessionStart();

        const errorContent = (res as IApiReturnObject).error as IFetchError;

        expect(res).toEqual(tempReturnObject);
        expect(res.success).toBe(false);
        expect(errorContent.message).toBe('CSRF Token not found');
    });
});

