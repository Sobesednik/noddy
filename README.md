# noddy

[![npm version](https://badge.fury.io/js/noddy.svg)](https://badge.fury.io/js/noddy)

`noddy` is a Node.js package which allows to parse `process.version` string into
major, minor and patch numbers, and compare a specific version with the current
one.

```sh
npm i noddy
```

## ES5

The package uses some newer language features. For your convenience, it's been
transpiled to be compatible with Node 4. You can use the following snippet.

```js
const noddy = require('noddy/es5')
```

### API

The package provides a set of functions.

## `noddy.parseVersion(version?: string): { major: number, minor: number, patch: number }`

Call `parseVersion` to extract the version object from the version string.
Don't pass an argument to parse the current Node.js version.

```js
const { parseVersion } = require('noddy')

parseVersion() // { major: 8, minor: 9, patch: 3 }
parseVersion('v5.10.0') // { major: 5, minor: 10, patch: 0 }
```

## `noddy.nodeGt(version?: string): boolean`

Check if the current Node.js version is greater than the specified one.

```js
const { nodeGt } = require('noddy')

nodeGt('v2.3.4') // true
nodeGt('v20.3.4') // false
```

---

(c) [sobes.io][1] 2018

[1]: https://sobes.io
