import {IOrderInitialData} from 'src';
import {orderInitialData} from 'src/variables';

export function setOrderInitialData({shop_name,
    country_info,
    supported_languages,
    general_settings,
    alternate_payment_methods}: IOrderInitialData): void {
    orderInitialData.general_settings = general_settings;
    orderInitialData.shop_name = shop_name;
    orderInitialData.country_info = country_info;
    orderInitialData.supported_languages = supported_languages;
    orderInitialData.alternate_payment_methods = alternate_payment_methods;
}