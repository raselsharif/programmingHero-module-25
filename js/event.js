function blue() {
    document.body.style.backgroundColor = 'blue';
}

const purple = document.getElementById("purple");
purple.onclick = purpleColor;

function purpleColor() {
    document.body.style.backgroundColor = 'purple';
}

const yellow = document.getElementById("yellow");
yellow.onclick = function yellowColor() {
    document.body.style.backgroundColor = 'yellow';
}

const golden = document.getElementById('golden');

golden.addEventListener("click", function () {
    document.body.style.backgroundColor = "gold";
    console.log('clicked');
})

const pink = document.getElementById('pink').addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
})


const update = document.getElementById("update-btn").addEventListener('click', function () {
    const inputText = document.getElementById('input-text');

    const inputField = document.getElementById('input-field');

    inputText.innerText = "My Name is: "+ inputField.value;

    inputField.value='';
})