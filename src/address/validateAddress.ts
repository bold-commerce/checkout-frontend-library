import {apiTypeKeys, fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject, IValidateAddress} from 'src';

/**
 *
 * Validates the postal code coming from shipping / billing address
 *
 * @param firstName
 * @param lastName
 * @param addressLine1
 * @param addressLine2
 * @param city
 * @param postalCode
 * @param province
 * @param provinceCode
 * @param country
 * @param countryCode
 * @param businessName
 * @param phoneNumber
 * @param numOfRetries
 */
export async function validateAddress(firstName: string, lastName: string, addressLine1:string, addressLine2: string, city: string, postalCode: string, province: string, provinceCode: string, country:string, countryCode: string, businessName?: string, phoneNumber?: string , numOfRetries= 0): Promise<IApiReturnObject> {
    const {validateAddress} = apiTypeKeys;
    let params: IValidateAddress = { first_name: firstName, last_name: lastName, address_line_1: addressLine1, address_line_2: addressLine2, city: city, postal_code: postalCode, province: province, country_code: countryCode, country: country, province_code: provinceCode };
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
