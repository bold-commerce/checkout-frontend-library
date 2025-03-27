# @boldcommerce/checkout-frontend-library

## Table of contents

### Interfaces

- [IAddDiscountResponse](interfaces/IAddDiscountResponse.md)
- [IAddGuestCustomerRequest](interfaces/IAddGuestCustomerRequest.md)
- [IAddGuestCustomerResponse](interfaces/IAddGuestCustomerResponse.md)
- [IAddPaymentRequest](interfaces/IAddPaymentRequest.md)
- [IAddPaymentResponse](interfaces/IAddPaymentResponse.md)
- [IAddress](interfaces/IAddress.md)
- [IAddressAutoComplete](interfaces/IAddressAutoComplete.md)
- [IAddressType](interfaces/IAddressType.md)
- [IAlternatePaymentMethodType](interfaces/IAlternatePaymentMethodType.md)
- [IApiAcceptedResponse](interfaces/IApiAcceptedResponse.md)
- [IApiErrorResponse](interfaces/IApiErrorResponse.md)
- [IApiErrors](interfaces/IApiErrors.md)
- [IApiErrorsResponse](interfaces/IApiErrorsResponse.md)
- [IApiReturnObject](interfaces/IApiReturnObject.md)
- [IApiSuccessResponse](interfaces/IApiSuccessResponse.md)
- [IApiTypeKeys](interfaces/IApiTypeKeys.md)
- [IApiTypes](interfaces/IApiTypes.md)
- [IApiTypesDetail](interfaces/IApiTypesDetail.md)
- [IApplicationState](interfaces/IApplicationState.md)
- [IAuth](interfaces/IAuth.md)
- [IAvailableShippingLine](interfaces/IAvailableShippingLine.md)
- [ICartParameters](interfaces/ICartParameters.md)
- [IChangeShippingLineRequest](interfaces/IChangeShippingLineRequest.md)
- [IChangeShippingLineResponse](interfaces/IChangeShippingLineResponse.md)
- [ICheckInventory](interfaces/ICheckInventory.md)
- [ICheckInventoryResponse](interfaces/ICheckInventoryResponse.md)
- [ICheckInventoryStage](interfaces/ICheckInventoryStage.md)
- [ICheckoutProcess](interfaces/ICheckoutProcess.md)
- [ICountryInformation](interfaces/ICountryInformation.md)
- [ICssRule](interfaces/ICssRule.md)
- [ICssStylingPaymentIframeRequest](interfaces/ICssStylingPaymentIframeRequest.md)
- [ICssStylingPaymentIframeResponse](interfaces/ICssStylingPaymentIframeResponse.md)
- [ICurrency](interfaces/ICurrency.md)
- [ICustomer](interfaces/ICustomer.md)
- [IDeleteDiscountResponse](interfaces/IDeleteDiscountResponse.md)
- [IDiscount](interfaces/IDiscount.md)
- [IDiscountRequest](interfaces/IDiscountRequest.md)
- [IEnvironment](interfaces/IEnvironment.md)
- [IEnvironmentTypes](interfaces/IEnvironmentTypes.md)
- [IEnvironmentUrls](interfaces/IEnvironmentUrls.md)
- [IErrorFormat](interfaces/IErrorFormat.md)
- [IExpressPayBraintree](interfaces/IExpressPayBraintree.md)
- [IExpressPayBraintreeApple](interfaces/IExpressPayBraintreeApple.md)
- [IExpressPayBraintreeGoogle](interfaces/IExpressPayBraintreeGoogle.md)
- [IExpressPayPaypal](interfaces/IExpressPayPaypal.md)
- [IExpressPayPaypalCommercePlatform](interfaces/IExpressPayPaypalCommercePlatform.md)
- [IExpressPayStripe](interfaces/IExpressPayStripe.md)
- [IExternalPayment](interfaces/IExternalPayment.md)
- [IFee](interfaces/IFee.md)
- [IFees](interfaces/IFees.md)
- [IFetchCallback](interfaces/IFetchCallback.md)
- [IFetchError](interfaces/IFetchError.md)
- [IGeneralApiResponseParsingErrorType](interfaces/IGeneralApiResponseParsingErrorType.md)
- [IGeneralSettings](interfaces/IGeneralSettings.md)
- [IGetPaymentIframeUrl](interfaces/IGetPaymentIframeUrl.md)
- [IGetShippingLinesResponse](interfaces/IGetShippingLinesResponse.md)
- [IHttpStatusCode](interfaces/IHttpStatusCode.md)
- [IInitializeOrderResponse](interfaces/IInitializeOrderResponse.md)
- [IInventoryCheck](interfaces/IInventoryCheck.md)
- [IInventoryFailedItems](interfaces/IInventoryFailedItems.md)
- [ILineItem](interfaces/ILineItem.md)
- [ILineItemRequest](interfaces/ILineItemRequest.md)
- [ILineItemRequestWithPlatformId](interfaces/ILineItemRequestWithPlatformId.md)
- [ILineItemRequestWithSku](interfaces/ILineItemRequestWithSku.md)
- [IMediaRule](interfaces/IMediaRule.md)
- [IMethods](interfaces/IMethods.md)
- [IOrderInitialData](interfaces/IOrderInitialData.md)
- [IOrderMetaData](interfaces/IOrderMetaData.md)
- [IPatchOrderMetaDataRequest](interfaces/IPatchOrderMetaDataRequest.md)
- [IPatchOrderMetaDataResponse](interfaces/IPatchOrderMetaDataResponse.md)
- [IPayment](interfaces/IPayment.md)
- [IPaymentFrame](interfaces/IPaymentFrame.md)
- [IProductData](interfaces/IProductData.md)
- [IProvince](interfaces/IProvince.md)
- [ISessionStartApiResponse](interfaces/ISessionStartApiResponse.md)
- [ISessionStartRequest](interfaces/ISessionStartRequest.md)
- [ISetBillingAddressResponse](interfaces/ISetBillingAddressResponse.md)
- [ISetShippingAddressResponse](interfaces/ISetShippingAddressResponse.md)
- [ISetTaxesResponse](interfaces/ISetTaxesResponse.md)
- [IShipping](interfaces/IShipping.md)
- [IShippingLine](interfaces/IShippingLine.md)
- [IStyleSheet](interfaces/IStyleSheet.md)
- [ISupportedLanguage](interfaces/ISupportedLanguage.md)
- [ITax](interfaces/ITax.md)
- [IUpdateLineItemQuantityResponse](interfaces/IUpdateLineItemQuantityResponse.md)
- [IValidateAddress](interfaces/IValidateAddress.md)
- [IValidateAddressRequest](interfaces/IValidateAddressRequest.md)
- [IValidateDiscount](interfaces/IValidateDiscount.md)
- [IValidateEmail](interfaces/IValidateEmail.md)
- [IValidateEmailRequest](interfaces/IValidateEmailRequest.md)

### Type Aliases

- [IAlternativePaymentMethod](modules.md#ialternativepaymentmethod)
- [IApiResponse](modules.md#iapiresponse)
- [IApiUrlQueryParams](modules.md#iapiurlqueryparams)
- [IDeleteCustomerResponse](modules.md#ideletecustomerresponse)
- [IDeletePaymentRequest](modules.md#ideletepaymentrequest)
- [IExternalPaymentMethod](modules.md#iexternalpaymentmethod)
- [IGetApiOptionsBody](modules.md#igetapioptionsbody)
- [IInventoryStage](modules.md#iinventorystage)
- [ISetBillingAddressRequest](modules.md#isetbillingaddressrequest)
- [ISetShippingAddressRequest](modules.md#isetshippingaddressrequest)
- [IUpdatePaymentRequest](modules.md#iupdatepaymentrequest)

## Type Aliases

### IAlternativePaymentMethod

Ƭ **IAlternativePaymentMethod**: ([`IExpressPayStripe`](interfaces/IExpressPayStripe.md) \| [`IExpressPayPaypal`](interfaces/IExpressPayPaypal.md) \| [`IExpressPayBraintreeGoogle`](interfaces/IExpressPayBraintreeGoogle.md) \| [`IExpressPayBraintreeApple`](interfaces/IExpressPayBraintreeApple.md) \| [`IExpressPayPaypalCommercePlatform`](interfaces/IExpressPayPaypalCommercePlatform.md))[]

___

### IApiResponse

Ƭ **IApiResponse**: [`IApiErrorResponse`](interfaces/IApiErrorResponse.md) \| [`IApiErrorsResponse`](interfaces/IApiErrorsResponse.md) \| [`IApiSuccessResponse`](interfaces/IApiSuccessResponse.md) \| [`IApiAcceptedResponse`](interfaces/IApiAcceptedResponse.md)

___

### IApiUrlQueryParams

Ƭ **IApiUrlQueryParams**: [`IValidateEmail`](interfaces/IValidateEmail.md) \| [`IValidateAddress`](interfaces/IValidateAddress.md) \| [`IPaymentFrame`](interfaces/IPaymentFrame.md) \| [`ICheckInventory`](interfaces/ICheckInventory.md) \| [`IValidateDiscount`](interfaces/IValidateDiscount.md)

___

### IDeleteCustomerResponse

Ƭ **IDeleteCustomerResponse**: [`IAddGuestCustomerResponse`](interfaces/IAddGuestCustomerResponse.md)

___

### IDeletePaymentRequest

Ƭ **IDeletePaymentRequest**: [`IAddPaymentRequest`](interfaces/IAddPaymentRequest.md)

___

### IExternalPaymentMethod

Ƭ **IExternalPaymentMethod**: [`IExternalPayment`](interfaces/IExternalPayment.md)[]

___

### IGetApiOptionsBody

Ƭ **IGetApiOptionsBody**: [`ISessionStartRequest`](interfaces/ISessionStartRequest.md) \| [`IAddGuestCustomerRequest`](interfaces/IAddGuestCustomerRequest.md) \| [`ILineItemRequest`](interfaces/ILineItemRequest.md) \| [`ILineItemRequestWithSku`](interfaces/ILineItemRequestWithSku.md) \| [`ILineItemRequestWithPlatformId`](interfaces/ILineItemRequestWithPlatformId.md) \| [`IValidateEmailRequest`](interfaces/IValidateEmailRequest.md) \| [`ISetShippingAddressRequest`](modules.md#isetshippingaddressrequest) \| [`ISetBillingAddressRequest`](modules.md#isetbillingaddressrequest) \| [`IValidateAddressRequest`](interfaces/IValidateAddressRequest.md) \| [`IChangeShippingLineRequest`](interfaces/IChangeShippingLineRequest.md) \| [`IDiscountRequest`](interfaces/IDiscountRequest.md) \| [`ICssStylingPaymentIframeRequest`](interfaces/ICssStylingPaymentIframeRequest.md) \| [`IAddPaymentRequest`](interfaces/IAddPaymentRequest.md) \| [`IUpdatePaymentRequest`](modules.md#iupdatepaymentrequest) \| [`IDeletePaymentRequest`](modules.md#ideletepaymentrequest) \| [`IPatchOrderMetaDataRequest`](interfaces/IPatchOrderMetaDataRequest.md) \| `Record`<`string`, `unknown`\>

___

### IInventoryStage

Ƭ **IInventoryStage**: ``"initial"`` \| ``"final"``

___

### ISetBillingAddressRequest

Ƭ **ISetBillingAddressRequest**: [`IAddress`](interfaces/IAddress.md)

___

### ISetShippingAddressRequest

Ƭ **ISetShippingAddressRequest**: [`IAddress`](interfaces/IAddress.md)

___

### IUpdatePaymentRequest

Ƭ **IUpdatePaymentRequest**: [`IAddPaymentRequest`](interfaces/IAddPaymentRequest.md)
