import {IOrderInitialData} from 'src';
import {orderInitialDataMock} from 'src/variables/mocks';
import {setOrderInitialData} from 'src/state';
import {orderInitialData} from 'src/variables';

describe('testing setOrderInitialData', () => {
    test('Set order initial data', () => {
        const initData: IOrderInitialData = orderInitialDataMock;

        setOrderInitialData(initData);

        expect(orderInitialData).toStrictEqual(initData);
    });
});
