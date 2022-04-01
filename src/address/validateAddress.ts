import {fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject, IValidateAddress} from 'src';
import {apiTypeKeys} from 'src/variables';

/**
 *
 * Validates the postal code coming from shipping / billing address
 *
 * @param postalCode
 * @param province
 * @param countryCode
 */
export async function validateAddress(postalCode: string, province: string, provinceCode: string, country:string, countryCode: string, business_name?: string): Promise<IApiReturnObject> {
    const {validateAddress} = apiTypeKeys;
    let params: IValidateAddress = { postal_code: postalCode, province: province, country_code: countryCode, country: country, province_code: provinceCode };
    if (business_name) {
        params = {...params, business_name: business_name};
    }

    const url = getApiUrlWithParams(validateAddress, params);
    const options = getApiOptions(validateAddress);

    return await fetchAPI(url, options);
}
