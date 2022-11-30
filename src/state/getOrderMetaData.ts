import {IOrderMetaData} from 'src';
import {applicationState} from 'src/variables';

export function getOrderMetaData(): IOrderMetaData{
    return JSON.parse(JSON.stringify(applicationState.order_meta_data));
}
