const userInfo = require('./information.js');
const cowsay = require("cowsay");


console.log(cowsay.say({
    text : `Hello,my name is ${userInfo.name} and i am from ${userInfo.campus} campus`,
    e : "oO",
    T : "U "
}));