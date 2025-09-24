let count =0;

const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const number = document.getElementById('number');

increment.onclick = function(){
    count++;
    number.textContent = count;

}
decrement.onclick = function(){
    count--;
    number.textContent = count;

}
reset.onclick = function(){
    count = 0;
    number.textContent = count;

}