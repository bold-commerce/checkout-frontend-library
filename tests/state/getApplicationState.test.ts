import {applicationState} from 'src/variables';
import {getApplicationState} from 'src';
import {setApplicationState} from 'src/state';
import {applicationStateMock} from 'src/variables/mocks';

describe('get Application State', () => {
    test('get mocked application state', () => {
        setApplicationState(applicationStateMock);
        const result = getApplicationState();
        expect(result).toStrictEqual(applicationStateMock);
    });

    test('should not alter application state', () => {
        const text = 'test';
        setApplicationState(applicationStateMock);
        const result = getApplicationState();

        expect(result).toStrictEqual(applicationStateMock);

        result.customer.first_name = text;

        expect(result.customer.first_name).toBe(text);
        expect(applicationState.customer.first_name).not.toBe(text);
    });
});
