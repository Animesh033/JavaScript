//What is callback function in JS
setTimeout(function() {
    console.log('timer')
}, 5000)

function x(y) {
    console.log('x')
    y();
}

x(function () {
console.log('callback function y')
})