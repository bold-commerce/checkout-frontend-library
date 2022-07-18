import {ICurrency} from 'src';
import {applicationState} from 'src/variables';

export function getCurrency(): ICurrency{
    return JSON.parse(JSON.stringify(applicationState.currency));
}
