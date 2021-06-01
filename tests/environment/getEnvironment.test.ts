import {getEnvironment} from '../../src';
import {environment, environmentTypes, environmentPath, environmentUrls} from '../../src/variables';

describe('getEnvironment', () => {
    test('get default - production', () => {

        const result = getEnvironment();

        expect(result.type).toBe(environmentTypes.production);
        expect(result.url).toBe(environmentUrls.production);
        expect(result.path).toBe(environmentPath);
    });

    test('should not alter environment var', () => {
        const type = 'test';
        const url = 'https://example.com';
        const path = 'test-path';

        const result = getEnvironment();

        expect(result.type).toBe(environmentTypes.production);
        expect(result.url).toBe(environmentUrls.production);
        expect(result.path).toBe(environmentPath);

        result.type = type;
        result.url = url;
        result.path = path;

        expect(result.type).toBe(type);
        expect(result.url).toBe(url);
        expect(result.path).toBe(path);
        expect(environment.type).toBe(environmentTypes.production);
        expect(environment.url).toBe(environmentUrls.production);
        expect(environment.path).toBe(environmentPath);

    });
});
