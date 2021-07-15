import {IOrderMetaData} from '@src';
import {order_meta_data} from '@src/variables';

export function setOrderMetaData({
    cart_parameters,
    note_attributes,
    notes,
    tags
}: IOrderMetaData): void {
    order_meta_data.cart_parameters = cart_parameters;
    order_meta_data.note_attributes = note_attributes;
    order_meta_data.notes = notes;
    order_meta_data.tags = tags;
}
