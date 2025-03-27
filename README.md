# Checkout Frontend Library

## Description
The Checkout Frontend Library is a Bold Javascript library, which contains reusable methods to help accomplish the following:

* Call Bold's [Headless Checkout APIs](https://developer.boldcommerce.com/default/guides/checkout)
* Control request retry
* Get useful types and constants to avoid defining interfaces

## Installation

### Install with Yarn
```
yarn add "@boldcommerce/checkout-frontend-library"
```

#### Install a specific version

```
yarn add "@boldcommerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number that you want)_

### Install with NPM
```
npm install "@boldcommerce/checkout-frontend-library"
```

#### Install a specific version

```
npm install "@boldcommerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number that you want)_

## Methods Reference

### Initialize

---

#### Initialize library

▸ **initialize**(`initData`, `shopIdentifier`, `environment`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Initialize the library with order data and environment variables. The library needs to be initialized with required data before using any other functionality.

```typescript
 const response: IApiReturnObject = await initialize(initData, shopIdentifier, environment);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `initData`| [IInitializeOrderResponse](./docs/interfaces/IInitializeOrderResponse.md) | The order data obtain from [Initialize Order](https://developer.boldcommerce.com/default/api/orders#tag/Orders) endpoint.  |
| `shopIdentifier`| `string` | The identifier of the shop. Can be retrieved by making a request to the [Get Info](https://developer.boldcommerce.com/default/api/shops#tag/Shop) endpoint.|
| `environment`| [IEnvironment](./docs/interfaces/IEnvironment.md) | Defined the bold API environment.  |


**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

### Address

---

#### Set Shipping Address

▸ **setShippingAddress**(`shippingAddress`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Set the shipping address on the order. If a shipping address already exists, the existing address is overwritten.

```typescript
 const response: IApiReturnObject = await setShippingAddress(_shipping, API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `shippingAddress`| [IAddress](./docs/interfaces/IAddress.md)| The shipping address details. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Update Shipping Address

▸ **updateShippingAddress**(`shippingAddress`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Updates the shipping address on the order.

```typescript
 const response: IApiReturnObject = await updateShippingAddress(_shipping, API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `shippingAddress`| [IAddress](./docs/interfaces/IAddress.md)| The shipping address details. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Delete Shipping Address

▸ **deleteShippingAddress**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Deletes the shipping address from the order.

```typescript
 const response: IApiReturnObject = await deleteShippingAddress(API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Set Billing Address

▸ **setBillingAddress**(`billingAddress`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Set the billing address on the order. If a billing address already exists, the existing address is overwritten.
```typescript
 const response: IApiReturnObject = await setBillingAddress(_billing, API_RETRY);
```

**Parameters:**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `billingAddress`| [IAddress](./docs/interfaces/IAddress.md)| The billing address details. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Update Billing Address

▸ **updateBillingAddress**(`billingAddress`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Updates the billing address on the order.

```typescript
 const response: IApiReturnObject = await updateBillingAddress(_billing, API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `billingAddress`| [IAddress](./docs/interfaces/IAddress.md)| The billing address details. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Delete Billing Address

▸ **deleteBillingAddress**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Deletes the billing address from the order.

```typescript
 const response: IApiReturnObject = await deleteBillingAddress(API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

### Customer

---

#### Add Guest customer

▸ **addGuestCustomer**(`firstName`, `lastName`, `email`, `acceptsMarketing?`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Adds the guest customer details to the order. This method returns an error if a customer already exists on the order.

```typescript
 const response: IApiReturnObject = await addGuestCustomer(first_name, last_name, email_address, accepts_marketing, API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `firstName`|`string`| The customer's first name. |
| `lastName`|`string`| The customer's last name. |
| `email`|`string`| The customer's email address. |
| `acceptsMarketing?`|`boolean`| If the customer would like to receive any sort of marketing emails. The default value is false. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Delete customer

▸ **deleteCustomer**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Deletes the customer from the order.

```typescript
 const response: IApiReturnObject = await deleteCustomer(API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Update customer

▸ **updateCustomer**(`firstName`, `lastName`, `email`, `acceptsMarketing`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Updates the customer on the order.

```typescript
 const response: IApiReturnObject = await updateCustomer(first_name, last_name, email_address, accepts_marketing, API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `firstName`|`string`| The customer's first name. |
| `lastName`|`string`| The customer's last name. |
| `email`|`string`| The customer's email address. |
| `acceptsMarketing`|`boolean`| If the customer would like to receive any sort of marketing emails. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Validate customer email address

▸ **validateEmail**(`email`, `numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Validates the customer email address.

```typescript
 const response: IApiReturnObject = await validateEmail(email_address, API_RETRY);
```

**Parameters**

| Parameter| Type| Description|
| ---------| ----|-----------|
| `email`|`string`| The customer's email address. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

### Discounts

---

#### Add Discount Code

▸ **addDiscount**(`code`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Adds discount code to the order.

```typescript
 const response: IApiReturnObject = await addDiscount(code, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `code`| `string`| The discount code. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Delete Discount Code

▸ **deleteDiscount**(`code`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Deletes a discount code from the order.

```typescript
 const response: IApiReturnObject = await deleteDiscount(code, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `code`| `string`| The discount code. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Validate Discount Code

▸ **validateDiscount**(`code`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Validates the given discount code against the current order state. This method does not add discount code to the order.

```typescript
 const response: IApiReturnObject = await validateDiscount(code, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `code`| `string`| The discount code. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.


### Items

---

#### Update Line Item Quantity

▸ **updateLineItemQuantity**(`lineItemKey`, `quantity` ,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Updates the quantity of a line item on the order.

```typescript
 const response: IApiReturnObject = await updateLineItemQuantity(lineItemKey, quantity, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `lineItemKey`| `string`| The unique key to identify the line item. |
| `quantity`| `number`| The updated quantity. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.


### Shipping Lines

---

#### Change Shipping Line

▸ **changeShippingLine**(`index` ,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Adds or updates the shipping line on the order.

```typescript
 const response: IApiReturnObject = await changeShippingLine(index, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `index`| `string`| The index of a shipping line, selected from available shipping lines. The available shipping lines can be retrieved from the [get shipping line](#get-shipping-lines) method.  |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Get Shipping Lines

▸ **getShippingLines**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Get all the available shipping lines.

```typescript
 const response: IApiReturnObject = await getShippingLines(API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

### Taxes

---

#### Set Taxes

▸ **setTaxes**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Calculates and applies taxes to the order. Taxes are not automatically recalculated, so you must call this method after you make any changes to the shipping address.

```typescript
 const response: IApiReturnObject = await setTaxes(API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

### Order

---

#### Check Inventory

▸ **checkInventory**(`stage`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Performs an inventory check on the items of the order.

```typescript
 const response: IApiReturnObject = await checkInventory(stage, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `stage`| `IInventoryStage`| A enum of `initial` or `final`.  For most use cases, the value should be `initial` to indicate that the order has not been processed.  |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Process Order

▸ **processOrder**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Processes the order.

```typescript
 const response: IApiReturnObject = await processOrder(API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Get Application State

▸ **getRefreshedApplicationState**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Gets a refreshed copy of the application state.

```typescript
 const response: IApiReturnObject = await getRefreshedApplicationState(API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

### Payment

---

#### Add Payment

▸ **addPayment**(`payment`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Adds a new payment to the order.

```typescript
 const response: IApiReturnObject = await addPayment(payment, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `payment`| [IAddPaymentRequest](./docs/interfaces/IAddPaymentRequest.md)| The payment details. `gateway_public_id` and `token` fields are mandatory for adding a new payment.    |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Delete Payment

▸ **deletePayment**(`payment`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Removes the payment by `token`.

```typescript
 const response: IApiReturnObject = await deletePayment(payment, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `payment`| [IAddPaymentRequest](./docs/interfaces/IAddPaymentRequest.md)| The payment details. `gateway_public_id` and `token` fields are mandatory for adding a new payment.    |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Update Payment

▸ **updatePayment**(`payment`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Updates the value of the payment. Only the amount of payment can be changed.

```typescript
 const response: IApiReturnObject = await updatePayment(payment, API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `payment`| [IAddPaymentRequest](./docs/interfaces/IAddPaymentRequest.md)| The payment details. `gateway_public_id` and `token` fields are mandatory for adding a new payment.    |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### List Payments

▸ **getPaymentList**(`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Lists the payments that have been applied to the order.

```typescript
 const response: IApiReturnObject = await getPaymentList(API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

---

#### Remove Gift Card

▸ **deleteGiftCardPayment**(`id`,`numOfRetries?`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

Removes a gift card payment by `id`.

```typescript
 const response: IApiReturnObject = await getPaymentList(API_RETRY);
```

**Parameters**

| Parameter| type| Description|
| ---------| ----|-----------|
| `id`| `string`| The ID of the gift card payment. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

A promise that resolves the API response.

### State

The Bold Checkout Frontend Library keeps a local copy of the most up-to-date application state, which is updated after every API call. Use the methods in this section to retrieve certain information about your order. To see the latest order status, you can also call the [Get Application State](#get-application-state) endpoint.

---

#### Get Addresses

▸ **getAddresses**(): [IAddressType](./docs/interfaces/IAddressType.md)

Get the latest shipping and billing address from the Checkout Frontend Library local state management.

```typescript
 const addresses: IAddressType = await getAddresses();
```

---

#### Get Application State

▸ **getApplicationState**(): [IApplicationState](./docs/interfaces/IApplicationState.md)

Get the latest application state from the Checkout Frontend Library local state management.

```typescript
 const app: IApplicationState = await getApplicationState();
```

---

#### Get Billing Address

▸ **getBillingAddress**(): [IAddress](./docs/interfaces/IAddress.md)

Get the latest billing address from the Checkout Frontend Library local state management.

```typescript
 const billing: IAddress = await getBillingAddress();
```

---

#### Get Currency details

▸ **getCurrency**(): [ICurrency](./docs/interfaces/ICurrency.md)

Gets the order currency details from the Checkout Frontend Library local state management.

```typescript
 const currency: ICurrency = await getCurrency();
```

---

#### Get Customer details

▸ **getCustomer**(): [ICustomer](./docs/interfaces/ICustomer.md)

Gets the customer details from the Checkout Frontend Library local state management.

```typescript
 const customer: ICustomer = await getCustomer();
```

---

#### Get Discount List

▸ **getDiscounts**(): Array<[IDiscount](./docs/interfaces/IDiscount.md)>

Gets all the discounts applied to the order from the Checkout Frontend Library local state management.

```typescript
 const discounts: Array<IDiscount> = await getDiscounts();
```

---

#### Get Fees Information

▸ **getFees**(): Array<[IFees](./docs/interfaces/IFees.md)>

Gets all the fees applied to the order from the Checkout Frontend Library local state management.

```typescript
 const fees: Array<IFees> = await getFees();
```

---

#### Get Line Items

▸ **getLineItems**(): Array<[ILineItem](./docs/interfaces/ILineItem.md)>

Gets all the line items in the cart from the Checkout Frontend Library local state management.

```typescript
 const ILineItems: Array<ILineItem> = await getLineItems();
```

---

#### Get initial Order Data

▸ **getOrderInitialData**(): [IOrderInitialData](./docs/interfaces/IOrderInitialData.md)

Gets the initial data on the order from the Checkout Frontend Library local state management.

```typescript
 const initData: IOrderInitialData = await getOrderInitialData();
```

---

#### Get Order Metadata

▸ **getOrderMetaData**(): [IOrderMetaData](./docs/interfaces/IOrderMetaData.md)

Gets the order metadata from the Checkout Frontend Library local state management.

```typescript
 const initData: IOrderMetaData = await getOrderMetaData();
```

---

#### Get Payment Details

▸ **getPayments**(): Array<[IPayment](./docs/interfaces/IPayment.md)>

Gets all the payment details applied to the order from the Checkout Frontend Library local state management.

```typescript
 const payments: Array<IPayment> = await getPayments();
```

---

#### Get Shipping Lines Details

▸ **getShipping**(): [IShipping](./docs/interfaces/IShipping.md)

Gets the shipping lines details from the Checkout Frontend Library local state management.

```typescript
 const shippingLines: IShipping = await getShipping();
```

---

#### Get Shipping Address

▸ **getShippingAddress**(): [IAddress](./docs/interfaces/IAddress.md)

Gets the shipping address information from the Checkout Frontend Library local state management.

```typescript
 const shipping: IAddress = await getShippingAddress();
```


---

#### Get Taxes

▸ **getTaxes**(): Array<[ITax](./docs/interfaces/ITax.md)>

Gets all the applied taxes from the Checkout Frontend Library local state management.

```typescript
 const taxes: Array<ITax> = await getTaxes();
```
