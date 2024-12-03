## Overview

ClickPix SDK is an Proof of Concept implemented to think an openpix SDK to use in clickpix, allowing users developers manipuling the states from orders and charges and hold the click event to create an charge with the hook `beforeCreateCharge`

- [x] Vanilla
- [x] OpenPix
- [x] Babel CDN (Parcial)
- [x] React UMD CDN (Parcial)

## How to run

```
pnpm dev
```

Access the url: http://localhost:8084/examples/index.html

## Rules
To work fine is need the following the requeriments below:

- [x] Have an `index.html` file
- [x] Have a tag div defined with the class `clickpix`
- [x] Tag div should be an attribute `[data-product-id]` with unique id
- [x] Once the `price` is added to the status, it cannot be changed.
- [x] Have a script tag to load `openpix.js`

Follow an example of implementation in [examples/index.html](./examples/index.html)