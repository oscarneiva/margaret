const typewriterElement = document.getElementById("text");
const text = typewriterElement.innerText;
typewriterElement.innerText = "";

let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

type();