export function isObject(objectToTest: unknown): boolean {
    return typeof objectToTest === 'object' && objectToTest !== null && !Array.isArray(objectToTest);
}
