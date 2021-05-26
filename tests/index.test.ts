import {initialize} from '../src';

test('basic initialize', () => {
    const mockedLog = jest.fn();
    console.log = mockedLog;

    initialize()

    expect(mockedLog.mock.calls[0][0]).toBe('Initialized');
});
