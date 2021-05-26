# Checkout Frontend Library
Checkout Frontend Library is the Bold Javascript library of reusable methods to help:

* Call Checkout Headless APIs
* Control Request queue
* Communicate to PIGI API

---

# Contents

* [Getting up and running](#getting-up-and-running)
    * [Using checkout-frontend-library in a project](#using-checkout-frontend-library-in-a-project)
    * [Setup local checkout-frontend-library project](#setup-local-checkout-frontend-library-project)
* [NPM Scripts](#npm-scripts)

---

# Getting up and running

## Using Checkout Frontend Library in a project

Note: checkout-frontend-library is published to an internal npm registry at npm.boldapps.net. Your project should be configured to use this registry rather than the standard public npm registry.

**Switching to the internal npm registry**

Add the follow code to your `.yarnrc`
```
"@bold-commerce:registry" "http://npm.boldapps.net"
registry "https://registry.yarnpkg.com"
```

**Installing**
```
yarn add "@bold-commerce/checkout-frontend-library"
```

**Installing a specific version/tag/branch**
```
yarn add "@bold-commerce/checkout-frontend-library"@1.0.0
```
_(replace "1.0.0" with the version number, branch name, or tag name that you want)_

**Using the Library**
```
import {
  initialize,
  addAuthenticatedCustomer
} from '@bold-commerce/checkout-frontend-library';
```

## Setup local checkout-frontend-library project

After you clone the repo and run `yarn install`...

**Build everything**

```
yarn build
```
See [NPM Scripts](#npm-scripts) for more details.

---

# NPM Scripts

## Transpile to ES5
```
yarn build
```
This script will transpile the JS into ES5 syntax, then copy all the transpiled files from the `./src` directory into the `./lib` directory.

## Run Tests
```
yarn test
```
This script will run all the tests in the `./tests` directory.

