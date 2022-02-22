import {IApplicationState} from 'src';
import {
    setAddresses,
    setCustomer,
    setDiscounts,
    setLineItems,
    setOrderMetaData,
    setPayments,
    setShipping,
    setTaxes
} from 'src/state';
import {applicationState} from 'src/variables';

export function setApplicationState({
    customer,
    addresses,
    line_items,
    taxes,
    discounts,
    payments,
    order_meta_data,
    shipping,
    order_total,
    resumable_link,
    created_via
}: IApplicationState): void {
    setCustomer(customer);
    setAddresses(addresses);
    setLineItems(line_items);
    setTaxes(taxes);
    setDiscounts(discounts);
    setPayments(payments);
    setOrderMetaData(order_meta_data);
    setShipping(shipping);
    applicationState.order_total = order_total;
    applicationState.resumable_link = resumable_link;
    applicationState.created_via = created_via;
}
