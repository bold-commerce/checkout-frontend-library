import {IShipping} from 'src';
import {shipping} from 'src/variables';

export function setShipping({
    selected_shipping,
    available_shipping_lines,
    taxes,
    discounts
}: IShipping): void {
    shipping.selected_shipping = selected_shipping;
    shipping.available_shipping_lines = available_shipping_lines;
    shipping.taxes = taxes;
    shipping.discounts = discounts;
}
