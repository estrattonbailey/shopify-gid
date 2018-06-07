# shopify-gid
Universal encoder/decoder for ID values returned from the Shopify Storefront
GraphQL API. **400 bytes gzipped.**

## Install
```bash
npm i shopify-gid --save
```

# Usage
```javascript
import { encode, decode } from 'shopify-gid'
```
## decode(base64hash)
```javascript
decode('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEyMzQ1...')
  // => { type: 'Product', id: '12345', params: { accessToken: 'abcde123' }, raw: 'Z2lkOi8...' }
```
## encode(type, id[, params])
```javascript
encode('Product', 12345, { accessToken: 'abcde123' })
  // => Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEyMzQ1...
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
