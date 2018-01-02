const { parseVersion, nodeGt } = require('.')

const res = parseVersion('v10.5.4')
console.log(res)

const node = parseVersion()
console.log(node)

const gt = nodeGt('v2.3.4')
console.log(gt)

const gt2 = nodeGt('v20.3.4')
console.log(gt2)
