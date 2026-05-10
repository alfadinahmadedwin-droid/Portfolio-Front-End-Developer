// Typing Effect
const text = [
    "Front End Developer",
    "UI Designer",
    "Web Designer",
    "Freelancer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    }else {
        setTimeout(type, 100);
    }
})();

// Navbar Shadow on Scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});