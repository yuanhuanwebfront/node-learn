// require用于加载其他模块
const exportModule = require('./exports-module');

exportModule.sayHello()
exportModule.sayBye()

const model = require('./module.exports');

model()