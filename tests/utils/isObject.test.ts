import {isObject} from 'src';

describe('Test isObject function', () => {
    test('Test objects return true', () => {
        const returnsToTest: Array<Record<string, unknown>> = [
            {
                key: 'value'
            }, {
                subobj1: {
                    key1: 'value1',
                    key2: 'value2'
                },
                key3: 'value3'
            }
        ];

        returnsToTest.forEach(data => {
            const resultIsObject = isObject(data);
            expect(resultIsObject).toBe(true);
        });
    });

    test('Test everything else return false', () => {
        const returnsToTest: Array<unknown> = [
            [1, 2, 3],
            true,
            false,
            'string',
            undefined,
            null
        ];

        returnsToTest.forEach(data => {
            const resultIsObject = isObject(data);
            expect(resultIsObject).toBe(false);
        });
    });

});
