// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function isObjectEmpty(object: any): boolean {
    return object ? Object.values(object).every(x => x === null || x === '' || x === undefined) : true;
}
