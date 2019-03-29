const form = document.getElementById('my-form');
console.log(document);
// console.log(form);
const container = document.querySelector('h1');
// console.log(container);

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value + ' ' + emailInput.value);


    if (nameInput.value === '' || emailInput.value === ''){
        //alert('Input!! Motherfucker');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all gap motherfucker';

    }else{
    const li = document.createElement('li');
    const text = document.createTextNode(`${nameInput.value}:${emailInput.value}`);
    li.appendChild(text);
    //console.log(li);

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
    msg.innerHTML ='';
    }
}