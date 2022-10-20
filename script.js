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
    tip.innerHTML = myTip;
}


// API stands for Application Programming Interface
// DNS stands for Domain Name Service
// ISP stands for Internet Service Provider

// Read up on Promises, .then, .catch, .async await

// Look up and read up on articles about
// Execution Stack
// Event Loop
// Web APIs
// Message Queue
// Promises
// async await
// .then .catch


// Check Up on your problems on Stack Overflow