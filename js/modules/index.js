'use strict';
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';


const myModule = require('./main');

const myModuleInstance = new myModule();
myModuleInstance.sayHello();
myModuleInstance.sayBye();