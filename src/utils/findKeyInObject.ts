import {isObject} from 'src/utils/isObject';

export function findKeyInObject(objectToParse: unknown, keyToFind: string, parent = ''): string | boolean {
    let path: string | boolean = false;
    if (!isObject(objectToParse) && parent === '') {
        return false;
    }

    const keys = Object.keys(<Record<string, unknown>>objectToParse);
    if (keys.length > 0 && keys.find(key => key === keyToFind)) {
        return `${parent}`;
    } else {
        keys.forEach((key) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (isObject(objectToParse[key])) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                path = findKeyInObject({...objectToParse[key]}, keyToFind, `${parent}${parent ? '.' : ''}${key}`);
            }
        });
    }
    return path;
}
