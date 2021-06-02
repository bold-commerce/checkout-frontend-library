import {getCsrfToken} from '../../src';
import {auth} from '../../src/variables';

describe('getCsrfToken', () => {
    test('get default - empty', () => {

        const result = getCsrfToken();

        expect(result).toBe('');
    });

    test('should not alter auth var', () => {
        const text = 'test';
        let result = getCsrfToken();

        expect(result).toBe('');

        result = text;

        expect(result).toBe(text);
        expect(auth.csrfToken).not.toBe(text);
        expect(auth.csrfToken).toBe('');
    });
});
