import {getJwtToken} from '../../src';
import {auth} from '../../src/variables';

describe('getJwtToken', () => {
    test('get default - empty', () => {

        const result = getJwtToken();

        expect(result).toBe('');
    });

    test('should not alter auth var', () => {
        const text = 'test';
        let result = getJwtToken();

        expect(result).toBe('');

        result = text;

        expect(result).toBe(text);
        expect(auth.jwtToken).not.toBe(text);
        expect(auth.jwtToken).toBe('');
    });
});
