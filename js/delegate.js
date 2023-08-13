const items = document.getElementsByClassName('item');

// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }
const addItem = document.getElementById('add-item');
const listContainer = document.getElementById('list-container');

listContainer.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})


const input = document.getElementById('input-text');

addItem.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = input.value;
    listContainer.appendChild(li);
    li.classList.add('item');
    input.value = '';
})