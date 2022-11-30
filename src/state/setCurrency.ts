import {ICurrency} from 'src';
import {currency} from 'src/variables';

export function setCurrency({
    iso_code,
    iso_numeric_code,
    symbol,
    format,
    has_decimal,
    show_iso_code
}: ICurrency): void {
    currency.symbol = symbol;
    currency.format = format;
    currency.has_decimal = has_decimal;
    currency.iso_code = iso_code;
    currency.show_iso_code = show_iso_code;
    currency.iso_numeric_code = iso_numeric_code;
}
