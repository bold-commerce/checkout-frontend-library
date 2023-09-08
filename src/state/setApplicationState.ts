import {IApplicationState} from 'src';
import {
    setAddresses,
    setCurrency,
    setCustomer,
    setDiscounts,
    setFees,
    setLineItems,
    setOrderMetaData,
    setPayments,
    setShipping,
    setTaxes
} from 'src/state';
import {applicationState} from 'src/variables';
import {setDisplayCurrency} from 'src/state/setDisplayCurrency';

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
    created_via,
    is_processed,
    fees,
    currency,
    display_currency,
    display_exchange_rate,
}: IApplicationState): void {
    setCustomer(customer);
    setAddresses(addresses);
    setLineItems(line_items);
    setTaxes(taxes);
    setDiscounts(discounts);
    setPayments(payments);
    setOrderMetaData(order_meta_data);
    setShipping(shipping);
    setFees(fees);
    setCurrency(currency);
    if (display_currency) {
        setDisplayCurrency(display_currency);
        applicationState.display_exchange_rate = display_exchange_rate;
    }
    applicationState.order_total = order_total;
    applicationState.resumable_link = resumable_link;
    applicationState.created_via = created_via;
    applicationState.is_processed = is_processed;
}
