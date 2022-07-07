import {IFees} from 'src';
import {applicationState} from 'src/variables';

export function getFees(): Array<IFees>{
    return JSON.parse(JSON.stringify(applicationState.fees));
}
