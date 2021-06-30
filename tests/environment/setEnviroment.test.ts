import {setEnvironment} from '@src';
import {environment, environmentTypes, environmentPath, environmentUrls} from '@src/variables';

describe('setEnvironment', () => {

    beforeEach(() => {
        environment.type = environmentTypes.production;
        environment.url = environmentUrls.production;
        environment.path = environmentPath;
    });

    test('set Staging', () => {
        const env = environmentTypes.staging;

        expect(() => setEnvironment(env)).not.toThrow();
        expect(environment.type).toBe(environmentTypes.staging);
        expect(environment.url).toBe(environmentUrls.staging);
        expect(environment.path).toBe(environmentPath);
    });

    test('set Production', () => {
        const env = environmentTypes.production;

        expect(() => setEnvironment(env)).not.toThrow();
        expect(environment.type).toBe(environmentTypes.production);
        expect(environment.url).toBe(environmentUrls.production);
        expect(environment.path).toBe(environmentPath);
    });

    test('set Local with url and path', () => {
        const env = environmentTypes.local;
        const url = 'https://example.com';
        const path = 'checkout-test-local';

        expect(() => setEnvironment(env, path, url)).not.toThrow();
        expect(environment.type).toBe(environmentTypes.local);
        expect(environment.url).toBe(url);
        expect(environment.path).toBe(path);
    });

    test('set Local without url and path', () => {
        const env = environmentTypes.local;

        expect(() => setEnvironment(env)).not.toThrow();
        expect(environment.type).toBe(environmentTypes.local);
        expect(environment.url).toBe(environmentUrls.staging);
        expect(environment.path).toBe(environmentPath);
    });

    test('Throw invalid type', () => {
        const env = 'test';
        const error = 'Invalid environment type!';

        expect(() => setEnvironment(env)).toThrow(error);
        expect(environment.type).toBe(environmentTypes.production);
        expect(environment.url).toBe(environmentUrls.production);
        expect(environment.path).toBe(environmentPath);
    });
});

