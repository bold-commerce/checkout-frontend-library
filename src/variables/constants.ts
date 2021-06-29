import {IEnvironmentTypes, IEnvironmentUrls} from '../types';

export const environmentTypes: IEnvironmentTypes = {
    production: 'production',
    staging: 'staging',
    local: 'local'
};

export const environmentUrls: IEnvironmentUrls = {
    production: 'https://api.boldcommerce.com',
    staging: 'https://api.staging.boldcommerce.com',
};

export const environmentPath = 'checkout';

