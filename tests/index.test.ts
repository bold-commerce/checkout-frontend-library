import {initialize} from '../src';

test('basic initialize', () => {
    const text = 'Initialized';
    const mockedLog = jest.fn();
    // eslint-disable-next-line no-console
    console.log = mockedLog;

    const response = initialize();

    expect(mockedLog.mock.calls[0][0]).toBe(text);
    expect(response).toBe(text);
});
