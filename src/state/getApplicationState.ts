import {IApplicationState} from 'src';
import {applicationState} from 'src/variables';

export function getApplicationState(): IApplicationState{
    return JSON.parse(JSON.stringify(applicationState));
}
