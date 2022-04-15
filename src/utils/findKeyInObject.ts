import {isObject} from 'src/utils/isObject';

/**
 * Returns the path to the first object in nested in `obj` that has a property of `key`. If no object nested in `obj`
 * has a property of `key` returns `false`. If `obj` is not an object returns `false`. If `key` is a property of `obj`
 * returns `p.join('.')`.
 * 
 * ```
 * const obj = {
 *     key1: 'value1',
 *     key2: 'value2',
 *     key3: {
 *         key4: 'value4',
 *     },
 *     key5: {
 *         key6: 'value6',
 *         key7: {
 *            key8: 'value8',
 *        },
 *        key9: {
 *           key8: 'duplicate',
 *        },
 *     },
 * };
 * 
 * findKeyInObject(obj, 'noKey'); // false
 * findKeyInObject(obj, 'key1'); // ''
 * findKeyInObject(obj, 'key4'); // 'key3'
 * findKeyInObject(obj, 'key8'); // 'key5.key7'
 * findKeyInObject(obj, 'key8', ['root']); // 'root.key5.key7'
 * findKeyInObject(obj, 'nokey', ['root']); // false
 * ```
 */
export function findKeyInObject(obj: unknown, key: string, p: string[] | string = []): string | boolean {
    if (!isObject(obj)) { return false; }
    
    const path = Array.isArray(p) ? p : p.split('.');
    if (key in obj) {
        return path.join('.');
    }

    const objEntries = Object.entries(obj);
    for (const [ k, v ] of objEntries) {
        const pathToKey = findKeyInObject(v, key, [...path, k]);

        if (pathToKey) {
            return pathToKey;
        }
    }

    return false;
}