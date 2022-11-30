import {setOrderMetaData} from 'src/state';
import {applicationState} from 'src/variables';
import {orderMetaDataMock} from 'src/variables/mocks';

describe('setOrderMetaData', () => {
    test('Set Order Meta Data to application state', () => {

        setOrderMetaData(orderMetaDataMock);

        expect(applicationState.order_meta_data).toStrictEqual(orderMetaDataMock);
    });
});
