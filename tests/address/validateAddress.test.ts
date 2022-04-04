import {validateAddress, FetchError} from 'src';
import {baseReturnObject} from 'src/variables';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';

describe('testing validateAddress', () => {
    const returnObject = {...baseReturnObject};
    returnObject.success = true;
    const fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
    jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue({});
    const postalCode = 'R3Y 0L6';
    const province = 'Manitoba';
    const countryCode = 'CA';
    const country = 'Canada';
    const provinceCode = 'MB';
    const businessName = 'Business Name';
    const phoneNumber = '204-555-1234';

    test('successful call (200)', async () => {
        const res = await validateAddress(postalCode, province, provinceCode, country, countryCode);

        expect(res.success).toBe(true);
    });
    test('successful call with business name (200)', async () => {
        const res = await validateAddress(postalCode, province, provinceCode, country, countryCode, businessName);

        expect(res.success).toBe(true);
    });
    test('successful call with Phone Number AND Company Name (200)', async () => {
        const res = await validateAddress(postalCode, province, provinceCode, country, countryCode, businessName, phoneNumber);

        expect(res.success).toBe(true);
    });
    test('successful call with Phone Number (200)', async () => {
        const res = await validateAddress(postalCode, province, provinceCode, country, countryCode, '', phoneNumber);

        expect(res.success).toBe(true);
    });
    test('failed call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await validateAddress(postalCode, province, provinceCode, country, countryCode);

        expect(res.success).toBe(false);
        expect(res.error).toBeInstanceOf(FetchError);
        expect((res.error as FetchError).status).toBe(422);
    });
});
