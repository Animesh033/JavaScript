var x = 1;

function b() {
    var x = 10;
    console.log(x)
}

b();
console.log(window.x) //window onject is created by js engine and in global scope
console.log(x) //if nothing is there is it's in global scope