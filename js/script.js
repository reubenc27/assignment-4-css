function updateText() {
    let textElement = document.getElementById("title");
    if (window.innerWidth <= 768) {
        textElement.textContent = "Assignment Four";
    } else {
        textElement.textContent = "Assignment 4";
    }
}

updateText();

// Run when window resizes
window.addEventListener("resize", updateText);