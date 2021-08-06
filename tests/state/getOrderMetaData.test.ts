import {applicationState} from 'src/variables';
import {getOrderMetaData, setOrderMetaData} from 'src/state';
import {orderMetaDataMock} from 'src/variables/mocks';

describe('get Meta data', () => {
    test('get mocked meta data', () => {
        setOrderMetaData(orderMetaDataMock);
        const result = getOrderMetaData();
        expect(result).toStrictEqual(orderMetaDataMock);
    });

    test('should not alter Meta data', () => {
        const text = 'test';
        setOrderMetaData(orderMetaDataMock);
        const result = getOrderMetaData();

        expect(result).toStrictEqual(orderMetaDataMock);

        result.notes = text;

        expect(result.notes).toBe(text);
        expect(applicationState.order_meta_data.notes).not.toBe(text);
    });
});
