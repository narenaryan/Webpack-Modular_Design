import {filter} from "underscore";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function evenNums(list){
    return filter(list, function(num) {return num % 2 == 0})
}

export default {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    evenNums: evenNums
}
