const typewriterElement = document.getElementById("text");
const text = typewriterElement.innerText; // Retrieve text inside <p>
typewriterElement.innerText = ""; // Clear initial text

let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 80); // Adjust typing speed here (milliseconds)
    }
}

type();