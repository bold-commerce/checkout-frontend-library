import * as getApplicationState from 'src/state/getApplicationState';
import {applicationStateMock, customerMock, emptyCustomerMock,} from 'src/variables/mocks';
import {apiTypeKeys, buildCustomerBatchRequest} from 'src';

describe('buildCustomerBatchRequest', () => {

    let getApplicationStateSpy: jest.SpyInstance;

    beforeEach(() => {
        getApplicationStateSpy = jest.spyOn(getApplicationState, 'getApplicationState').mockReturnValue(applicationStateMock);
    });

    const guestCustomer = {...customerMock ,platform_id: '' };

    const expectedPayload = {
        first_name: 'john',
        last_name: 'smith',
        email_address: 'john@gmail.com',
        accepts_marketing: false
    };

    const data = [
        {name: 'testing login user', firstname: 'john', lastname: 'smith', email: 'john@gmail.com',  customer: customerMock, expected: null },
        {name: 'testing with empty customer', firstname: 'john', lastname: 'smith', email: 'john@gmail.com', customer: emptyCustomerMock, expected: {apiType: apiTypeKeys.addGuestCustomer, payload: expectedPayload} },
        {name: 'testing without empty customer', firstname: 'john', lastname: 'smith', email: 'john@gmail.com', customer: guestCustomer, expected: {apiType: apiTypeKeys.updateCustomer, payload: expectedPayload} },
    ];

    test.each(data)( '$name', async ({firstname, lastname, email, customer,expected}) => {

        const appState = {...applicationStateMock , customer: customer};
        getApplicationStateSpy.mockReturnValueOnce(appState);
        const result = buildCustomerBatchRequest(firstname, lastname, email);
        expect(result).toStrictEqual(expected);
    });

});
