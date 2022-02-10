import {fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject} from 'src';
import {apiTypeKeys} from 'src/variables';

/**
 *
 * Validates the postal code coming from shipping / billing address
 *
 * @param postalCode
 * @param province
 * @param countryCode
 */
export async function validateAddress(postalCode: string, province: string, provinceCode: string, country:string, countryCode: string): Promise<IApiReturnObject> {
    const {validateAddress} = apiTypeKeys;
    const url = getApiUrlWithParams(validateAddress, { postal_code: postalCode, province: province, country_code: countryCode, country: country, province_code: provinceCode });
    const options = getApiOptions(validateAddress);

    return await fetchAPI(url, options);
}
