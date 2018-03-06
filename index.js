export function decode (str) {
  const raw = typeof window === 'undefined' ? (
    Buffer.from(str, 'base64').toString('utf-8')
  ) : (
    atob(str) // eslint-disable-line no-undef
  ).split('shopify/')[1]

  const [ type, id ] = raw.split('/')

  return {
    type,
    id
  }
}

export function encode (type, id) {
  const full = `gid://shopify/${type}/${id}`

  return typeof window === 'undefined' ? (
    Buffer.from(full, 'utf-8').toString('base64')
  ) : (
    btoa(full) // eslint-disable-line no-undef
  )
}
