import {IShipping} from 'src';
import {applicationState} from 'src/variables';

export function getShipping(): IShipping{
    return JSON.parse(JSON.stringify(applicationState.shipping));
}
