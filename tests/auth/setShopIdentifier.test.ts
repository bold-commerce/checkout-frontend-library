import {setShopIdentifier} from '../../src';
import {auth} from '../../src/variables';

describe('setShopIdentifier', () => {

    beforeEach(() => {
        auth.shopIdentifier = 'pre-test';
    });

    test('set succeed', () => {
        const test = 'test';

        setShopIdentifier(test);
        
        expect(auth.shopIdentifier).toBe(test);
    });
});