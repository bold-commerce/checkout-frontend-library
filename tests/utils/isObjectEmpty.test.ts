import {isObjectEmpty} from 'src/utils';


describe('testing isObjectEmpty', () => {

    const dataArray = [
        {
            name: 'test empty object ',
            data: {address: '', postal_code: ''},
            expected: true
        },
        {
            name: 'test partial empty object ',
            data: {address: 'test', postal_code: ''},
            expected: false
        },
        {
            name: 'test undefined object ',
            data: {address: undefined, postal_code: ''},
            expected: true
        },
        {
            name: 'test non-empty object ',
            data: {address: 'test', postal_code: 'test'},
            expected: false
        },
        {
            name: 'test undefined object ',
            data: undefined,
            expected: true
        },
    ];


    test.each(dataArray)( '$name', async ({data, expected}) => {
        const result = isObjectEmpty(data);
        expect(result).toBe(expected);
    });
});
