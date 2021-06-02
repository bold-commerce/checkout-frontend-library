import {setCsrfToken} from '../../src';
import {auth} from '../../src/variables';

describe('setCsrfToken', () => {

    beforeEach(() => {
        auth.csrfToken = 'pre-test';
    });

    test('set succeed', () => {
        const test = 'test';

        setCsrfToken(test);

        expect(auth.csrfToken).toBe(test);
    });
});

