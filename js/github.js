document.getElementById('input').addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById('delete-btn');
    const inputValue = event.target.value;

    if (inputValue === 'delete') {
        deleteBtn.removeAttribute('disabled');
    } else {
        deleteBtn.setAttribute('disabled', true);
    }
})

document.getElementById('delete-btn').addEventListener('click', function () {
    const deleteText = document.getElementById('delete-text');
    deleteText.style.visibility = 'hidden'
})