let body = document.body;
let input = document.getElementById('amountSpent');
let select = document.getElementById('rating');
let tip = document.getElementById('tip')
let btn = document.getElementById('calculate');

btn.addEventListener('click', callBackFunction)

function callBackFunction(){
    // User must specify value and rating
    if (input.value.length === '' || select.value === ''){
        alert('Boss, you need to put in a amount as well as a rating');
        return;
    }
    
    const myTip = input.value * select.value;
    console.log(myTip);
}
