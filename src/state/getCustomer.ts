import {ICustomer} from 'src';
import {applicationState} from 'src/variables';

export function getCustomer(): ICustomer{
    return JSON.parse(JSON.stringify(applicationState.customer));
}
