import {getPublicOrderId} from '../../src';
import {auth} from '../../src/variables';

describe('get public order id', () => {
    test('get default -- empty', () => {
        const result = getPublicOrderId();

        expect(result).toBe('');
    });
    test('should not alter auth', () => {
        const text = 'test';
        let result = getPublicOrderId();

        expect(result).toBe('');

        result = text;

        expect(result).toBe(text);
        expect(auth.publicOrderId).not.toBe(text);
        expect(auth.publicOrderId).toBe('');
    });
});