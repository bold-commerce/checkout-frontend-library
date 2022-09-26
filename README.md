# Checkout Frontend Library

## Description
The Checkout Frontend Library is a Bold Javascript library, which contains reusable methods to help accomplish the following:

* Call Bold's [Headless Checkout APIs](https://developer.boldcommerce.com/default/guides/checkout)
* Control request retry
* Communicate to the [PIGI API](https://developer.boldcommerce.com/default/guides/checkout/checkout-pigi-api)
* Get useful types and constants to avoid defining interfaces

## Installation

### Install with Yarn
```
yarn add "@bold-commerce/checkout-frontend-library"
```

#### Install a specific version

```
yarn add "@bold-commerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number that you want)_

### Install with NPM
```
npm install "@bold-commerce/checkout-frontend-library"
```

#### Install a specific version

```
npm install "@bold-commerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number that you want)_

## Methods Reference

### Initialize

---

#### Initialize library

Initialize the library with order data and environment variables. The library needs to be initialized with required data before using any other functionality.

▸ **initialize**(`initData`, `shopIdentifier`, `environment`): Promise <[IApiReturnObject](./docs/interfaces/IApiReturnObject.md)>

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

---
