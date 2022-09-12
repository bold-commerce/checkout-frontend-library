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

### Address

#### Delete Billing Address

▸ **deleteBillingAddress**(`numOfRetries?`): Promise <`IApiReturnObject`>

Delete the billing address from the order. 

```typescript
 const response: IApiReturnObject = await deleteBillingAddress(API_RETRY);
```

**Parameters:**

| Parameter| type| Description|
| ---------| ----|-----------|
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |

**Returns**

`Promise`<`IApiReturnObject`>

A promise that resolves the API response.

---

#### Set Billing Address

▸ **setBillingAddress**(`billingAddress`, `numOfRetries?`): Promise <`IApiReturnObject`>

Set the billing address on the order. If billing address already exists, the existing address is overwritten.
```typescript
 const response: IApiReturnObject = await setBillingAddress(_billing, API_RETRY);
```

**Parameters:**

| Parameter| type| Description|
| ---------| ----|-----------|
| `billingAddress`| [IAddress](./docs/interfaces/address.md)| The billing address details. |
| `numOfRetries?`| `number`| The number of times to retry the API in case of a 408, 429, 503, 504, or 544 error. The default is 0. |



