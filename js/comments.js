const postButton = document.getElementById('post-btn').addEventListener('click', function () {
    const textBox = document.getElementById('textBox').value;

    const container = document.getElementById('comments-container');

    const pTag = document.createElement("p");

    pTag.innerText = textBox;

    container.appendChild(pTag);
})