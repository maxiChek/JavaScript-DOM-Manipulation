// // // DOM Manipulation

// // Styling Elements

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '1.5rem';
// }

// // Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// // Adding Elements

ul.append(li);

// // Modifying the text

li.innerText = 'X-men';
// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// // Modifying Attributes & Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))

// li.classList.add('list-items');

li.classList.add('list-items');

console.log(li.classList.contains('list-items'));

// // Remove Elements

li.remove();