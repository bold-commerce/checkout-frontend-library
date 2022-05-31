# Checkout Frontend Library

## Contents

* [Description](#description)
* [Installation](#installation)
  * [Install with Yarn](#install-with-yarn)
  * [Install with NPM](#install-with-npm)
* [Usage](#usage)

---

## Description
Checkout Frontend Library is the Bold Javascript library of reusable methods to help:

* Call Bold Checkout Headless APIs
* Control Request retry
* Communicate to PIGI API
* Get useful types and constants

---

## Installation

### Install with Yarn
```
yarn add "@bold-commerce/checkout-frontend-library"
```

Install a specific version

```
yarn add "@bold-commerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number that you want)_

### Install with NPM
```
npm install "@bold-commerce/checkout-frontend-library"
```

Install a specific version

Using NPM
```
npm install "@bold-commerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number that you want)_

## Usage

Example of importing and using functions and types with Typescript code:
```typescript
// Your project imports 
import {
  IApiReturnObject, 
  addGuestCustomer, 
  getCustomer, 
  ICustomer
} from '@bold-commerce/checkout-frontend-library';

type PreviousCustomer = Pick<ICustomer, 'email_address' | 'first_name' | 'last_name'>;
type NewCustomer = Pick<ICustomer, 'email_address' | 'first_name' | 'last_name' | 'accepts_marketing'>;

const handleAddGuestCustomer = async (customer: NewCustomer) : void => {
  const prevCustomer: ICustomer = getCustomer();
  const previous: PreviousCustomer = {email_address: prevCustomer.email_address, first_name: prevCustomer.first_name , last_name: prevCustomer.last_name};

  if (isObjectEmpty(previous)){
    const response: IApiReturnObject = await addGuestCustomer(customer.first_name,
            customer.last_name,
            customer.email_address,
            customer.accepts_marketing);
  }
  handleErrorIfNeeded(response);
};
```

Example importing and using constants
```typescript
// Your project imports 
import {pigiActionTypes} from '@bold-commerce/checkout-frontend-library';

const handlePigiMessage = (e) => {
    const {responseType, payload} = e.data as IPigiResponseData;

    if (responseType && payload && payload.height) {
        handlePigiHeight(payload);
    }

    switch (responseType) {
        case pigiActionTypes.PIGI_INITIALIZED:
            handlePigiInitialized();
            updatePigiLanguage();
            break;
        case pigiActionTypes.PIGI_ADD_PAYMENT:
            handlePigiAddPayment(payload, history);
            break;
        case pigiActionTypes.PIGI_PAYMENT_ADDED:
            handlePigiPaymentAdded();
            break;
        case pigiActionTypes.PIGI_HANDLE_SCA:
            handlePigiSca(payload, history);
            break;
        case pigiActionTypes.PIGI_REFRESH_ORDER:
            handlePigiRefreshOrder();
            break;
    }
};
```
---
