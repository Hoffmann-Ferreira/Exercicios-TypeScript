"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
const exercicio2_1 = require("../src/exercicio2");
const exercicio2_2 = require("../src/exercicio2");
const le = 'oi';
;
//using type in db model
exports.users = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];
//presenting necessary information
function logPerson(users) {
    console.log(` - ${users.name}, ${users.age}`);
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
(0, exercicio2_2.testar)(exercicio2_1.oi);
