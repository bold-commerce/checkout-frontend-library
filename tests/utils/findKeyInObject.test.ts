import {findKeyInObject} from 'src';

describe('Test findKeyInObject function', () => {
    const keyToFind = 'testKey';
    const parent = '';
    const dataProvider = {
        isNotObject: {
            expected: false,
            data: [
                'string',
                1234,
                true,
                false,
                undefined,
                null
            ],
        },
        noKeyInObject: {
            expected: false,
            data: [
                {
                    noTestKey: 'value'
                }, {
                    key1: {
                        key1: 'value1',
                        noTestKey: 'value2'
                    },
                    key2: 'value3'
                }
            ]
        },
        keyAtFirstLevel: {
            expected: '',
            data: [
                {
                    testKey: 'value'
                }, {
                    key1: {
                        key1: 'value1',
                        key2: 'value2'
                    },
                    testKey: 'value3'
                }
            ]
        },
        keyAtLowerLevel: {
            data: [
                {
                    expected: 'key1',
                    key1: {
                        testKey: 'value1',
                        key2: 'value2'
                    }
                },
                {
                    expected: 'level1.level2',
                    level1: {
                        level2: {
                            testKey: 'test'
                        }
                    }
                }
            ]
        }
    };

    test.each(dataProvider.isNotObject.data)('value to test is not object', (data) => {
        const resultIsObject = findKeyInObject(data, keyToFind, parent);
        expect(resultIsObject).toStrictEqual(dataProvider.isNotObject.expected);
    });

    test.each(dataProvider.noKeyInObject.data)('No key in the object', (data) => {
        const resultIsObject = findKeyInObject(data, keyToFind, parent);
        expect(resultIsObject).toStrictEqual(dataProvider.noKeyInObject.expected);
    });

    test.each(dataProvider.keyAtFirstLevel.data)('Key at first level', (data) => {
        const resultIsObject = findKeyInObject(data, keyToFind, parent);
        expect(resultIsObject).toStrictEqual(dataProvider.keyAtFirstLevel.expected);
    });

    test.each(dataProvider.keyAtLowerLevel.data)('Key at other than first level', (data) => {
        const resultIsObject = findKeyInObject(data, keyToFind, parent);
        expect(resultIsObject).toBe(data.expected);
    });
});
