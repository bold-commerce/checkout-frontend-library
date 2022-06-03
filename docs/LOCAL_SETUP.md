# Contents

* [Setup local checkout-frontend-library project](#setup-local-checkout-frontend-library-project)
* [NPM Scripts](#npm-scripts)

---

# Setup local checkout-frontend-library project

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

