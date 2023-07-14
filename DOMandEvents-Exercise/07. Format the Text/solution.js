function solve() {
  let input = document.querySelector("#input");
  let output = document.querySelector("#output");
  let sentences = Array.from(input.value.split(".")).filter(s=> s.length > 0);
  
  let paragraphs = Math.ceil(sentences.length / 3);
  for(let i = 0; i < paragraphs; i++){
    let paragraph = sentences.slice(3*i, 3* i + 3).join(". ") + ".";
    output.innerHTML+= `<p>${paragraph}</p>`;
  }
}