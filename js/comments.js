document.getElementById('post-btn').addEventListener('click', function () {
    const textBox = document.getElementById('textBox');
    

    const container = document.getElementById('comments-container');

    const pTag = document.createElement("p");

    pTag.innerText = textBox.value;

    container.appendChild(pTag);

    textBox.value = "";
})