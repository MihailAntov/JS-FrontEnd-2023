function extractWords(text) {
    let result = text
    .split(/[^\w]/)
    .filter(w=>w.length > 0)
    .map(w=>w.toUpperCase());

    console.log(result.join(", "));
}




extractWords('dssdg gdsgdsg  dsgd.sg ?');