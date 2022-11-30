import {apiTypeKeys, fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject, IValidateAddress} from 'src';

/**
 *
 * Validates the postal code coming from shipping / billing address
 *
 * @param postalCode
 * @param province
 * @param provinceCode
 * @param country
 * @param countryCode
 * @param businessName
 * @param phoneNumber
 * @param numOfRetries
 */
export async function validateAddress(postalCode: string, province: string, provinceCode: string, country:string, countryCode: string, businessName?: string, phoneNumber?: string , numOfRetries= 0): Promise<IApiReturnObject> {
    const {validateAddress} = apiTypeKeys;
    let params: IValidateAddress = { postal_code: postalCode, province: province, country_code: countryCode, country: country, province_code: provinceCode };
    if (businessName) {
        params = {...params, business_name: businessName};
    }
    if (phoneNumber) {
        params = {...params, phone_number: phoneNumber};
    }

    const url = getApiUrlWithParams(validateAddress, params);
    const options = getApiOptions(validateAddress);

    return await fetchAPI(url, options, numOfRetries);
}
