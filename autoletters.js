for(const el of document.querySelectorAll("letters")) {
    const text = el.innerText;
    el.innerHTML = "";
    el.setAttribute("title", text);
    insertLetters(el, text, el.getAttribute("height"));
}