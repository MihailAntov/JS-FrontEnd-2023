function extract(content) {
    let text = document.getElementById(content).textContent;
    const re = /\(.+?\)/g;
    let words = text.match(re).map(w=> w.slice(1,-1)).join("; ");

    return words;
}

