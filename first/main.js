// const ul = document.querySelector('.items');

// // ul.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText ='Brad';
// ul.lastElementChild.innerHTML= '<h1> Hello </h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover',(e) => {
//   e.preventDefault();
//   document.querySelector('.btn').style.background = 'teal';

//   // document.querySelector('body').classList.add('bg-dark');

//   document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello </h1>';
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
  e.preventDefault();

  //form validation
  if(nameInput.value === '' || emailInput === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(),3000); // Remove away the errors in 3 sec

  }else 
  {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
  
    userlist.appendChild(li);

    //clear fields.

    nameInput.value = '';
    emailInput.value = '';
  }
}