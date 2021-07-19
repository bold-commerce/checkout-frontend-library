import {getShopIdentifier} from 'src';
import {auth} from 'src/variables';

describe('get shop identifier', () => {
    test('get default - empty', () => {

        const result = getShopIdentifier();

        expect(result).toBe('');
    });

    test('should not alter auth', () => {
        const text = 'test';
        let result = getShopIdentifier();

        expect(result).toBe('');

        result = text;

        expect(result).toBe(text);
        expect(auth.shopIdentifier).not.toBe(text);
        expect(auth.shopIdentifier).toBe('');   
    });
});