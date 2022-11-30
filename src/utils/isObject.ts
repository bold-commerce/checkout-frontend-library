export function isObject(objectToTest: unknown): objectToTest is Record<string, unknown> {
    return typeof objectToTest === 'object' && objectToTest !== null && !Array.isArray(objectToTest);
}
