//=============Example===============
//Function Statement
function a() {
    console.log('a is called')
}

//Function Expression
var b = function () {
    console.log('a is called')
}

var c = function (param1, param2) {
    console.log('a is called')
}
a();
b();
c(1, 2); //1 and 2 are called arguments

//Main difference between function statement and expression is hoisting

//Anonymus Function
//function () {
//    console.log('anonynimus')
//}

//Named Function Expression
//var b = function xyz(){
//    console.log('a is called')
//}


//First Class Function
var c = function (param1) {
    return function () {

    }
}
console.log(c)
var d = function (param1) {
    return function xyz() {
        
    }
}
console.log(d)

//first class Functions / first class citizens : 
//The ability of functions to be  
//1) used as values
//2) can be passed as argument
//3) can be executed inside a closured function
//4) can be taken as return