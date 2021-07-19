import {IShipping} from 'src';
import {shipping} from 'src/variables';

export function setShipping({
    select_shipping_line,
    available_shipping_lines,
    taxes,
    discounts
}: IShipping): void {
    shipping.select_shipping_line = select_shipping_line;
    shipping.available_shipping_lines = available_shipping_lines;
    shipping.taxes = taxes;
    shipping.discounts = discounts;
}
