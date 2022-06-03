import {environmentTypes, environmentUrls, environmentPath} from 'src';
import {environment} from 'src/variables';

/**
 * ## setEnvironment
 * This function set basic environment variables necessary
 *  to define the url and path to call Checkout APIs.
 *
 * @param type Use one of the keys on {@linkcode environmentTypes}.
 * Only 'production', 'staging' or 'local' are valid.
 *
 * @param path Optional - Use to define Checkout APIs path after the Url.
 * Used only for 'local' type.
 *
 * @param url Optional - Use to define API Url.
 * Used only for 'local' type.
 */
export function setEnvironment(type: string, path?: string, url?: string): void {
    switch (type) {
        case environmentTypes.production:
            setProdEnv();
            break;
        case environmentTypes.staging:
            setStagEnv();
            break;
        case environmentTypes.local:
            setLocEnv(path, url);
            break;
        default:
            throw 'Invalid environment type!';
    }
}

function setProdEnv(): void {
    environment.type = environmentTypes.production;
    environment.url = environmentUrls.production;
    environment.path = environmentPath;
}

function setStagEnv(): void {
    environment.type = environmentTypes.staging;
    environment.url = environmentUrls.staging;
    environment.path = environmentPath;
}

function setLocEnv(path?: string, url?: string): void {
    environment.type = environmentTypes.local;
    environment.url = url ?? environmentUrls.staging;
    environment.path = path ?? environmentPath;
}
