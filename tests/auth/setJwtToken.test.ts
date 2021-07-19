import {setJwtToken} from 'src';
import {auth} from 'src/variables';

describe('setCsrfToken', () => {

    beforeEach(() => {
        auth.jwtToken = 'pre-test';
    });

    test('set succeed', () => {
        const test = 'test';

        setJwtToken(test);

        expect(auth.jwtToken).toBe(test);
    });
});

