import {orderInitialDataMock} from 'src/variables/mocks';
import {setOrderInitialData, getOrderInitialData} from 'src/state';

describe('get order initial data', () => {
    test('get mocked initial data', () => {
        setOrderInitialData(orderInitialDataMock);
        const result = getOrderInitialData();
        expect(result).toEqual(orderInitialDataMock);
    });

    test('should not alter initial data', () => {
        const text = 'test';
        setOrderInitialData(orderInitialDataMock);
        const result = getOrderInitialData();

        expect(result).toEqual(orderInitialDataMock);

        result.shop_name = text;

        expect(result.shop_name).toBe(text);
        expect(orderInitialDataMock.shop_name).not.toBe(text);
    });
});
