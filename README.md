# shopify-gid
Universal encoder/decoder for ID values returned from the Shopify Storefront
GraphQL API. 221 bytes gzipped.

## Install
```bash
npm i shopify-gid --save
```

# Usage
```javascript
import { encode, decode } from 'shopify-gid'

encode('Product', 12345) // => Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEyMzQ1
decode('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEyMzQ1') // => { type: 'Product', id:
'12345' }
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
