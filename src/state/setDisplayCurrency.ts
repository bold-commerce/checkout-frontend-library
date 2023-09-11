import {ICurrency} from 'src';
import {applicationState} from 'src/variables';

export function setDisplayCurrency({
    iso_code,
    iso_numeric_code,
    symbol,
    format,
    has_decimal,
    show_iso_code
}: ICurrency): void {
    applicationState.display_currency = {
        iso_code,
        iso_numeric_code,
        symbol,
        format,
        has_decimal,
        show_iso_code
    };
}
