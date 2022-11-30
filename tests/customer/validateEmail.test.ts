import {baseReturnObject, validateEmail, FetchError} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';

describe('testing validateEmail', () => {
    const returnObject = {...baseReturnObject};
    returnObject.success = true;
    const fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
    jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue({});
    const email = 'test@gmail.com';

    test('successful call (200)', async () => {
        const res = await validateEmail(email);

        expect(res.success).toBe(true);
    });
    test('failed call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await validateEmail(email);

        expect(res.success).toBe(false);
        expect(res.error).toBeInstanceOf(FetchError);
        expect((res.error as FetchError).status).toBe(422);
    });
});
