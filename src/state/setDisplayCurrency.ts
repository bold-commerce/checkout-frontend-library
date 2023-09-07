import {ICurrency} from 'src';
import {display_currency} from 'src/variables';

export function setDisplayCurrency({
    iso_code,
    iso_numeric_code,
    symbol,
    format,
    has_decimal,
    show_iso_code
}: ICurrency): void {
    display_currency.symbol = symbol;
    display_currency.format = format;
    display_currency.has_decimal = has_decimal;
    display_currency.iso_code = iso_code;
    display_currency.show_iso_code = show_iso_code;
    display_currency.iso_numeric_code = iso_numeric_code;
}
