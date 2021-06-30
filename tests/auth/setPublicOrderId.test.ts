import {auth} from '@src/variables';
import {setPublicOrderId} from '@src'; 

describe('set public order id', () => {
    beforeEach(() => {
        auth.publicOrderId = 'pre-test';
    });
    
    test('set succeed', () => {
        const text = 'test';

        setPublicOrderId(text);

        expect(auth.publicOrderId).toBe(text);
    });
});