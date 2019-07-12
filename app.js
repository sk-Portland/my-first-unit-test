import add from './add.js';

// reference elements
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const sumResult = document.getElementById('sum-result');
// wire up events

xInput.oninput = showSum;
yInput.oninput = showSum;
console.log('hi')

function showSum(){
    const x = Number(xInput.value);
    const y = Number(yInput.value);



    sumResult.textContent = add(x, y);


}