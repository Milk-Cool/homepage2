for(const el of document.querySelectorAll("letters")) {
    const text = el.innerText;
    el.innerHTML = "";
    insertLetters(el, text, el.getAttribute("height"));
}