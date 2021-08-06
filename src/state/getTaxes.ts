import {ITax} from 'src';
import {applicationState} from 'src/variables';

export function getTaxes(): Array<ITax>{
    return JSON.parse(JSON.stringify(applicationState.taxes));
}
