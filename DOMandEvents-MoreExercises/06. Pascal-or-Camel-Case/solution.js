function solve() {
  const input = document.querySelector("#text").value;
  const convention = document.querySelector("#naming-convention").value;
  const result = document.querySelector("#result");
  let lower = input.split(" ")
  .map(e=> e.toLowerCase());
  let modified = [];
  if(convention === "Pascal Case"){
    for (const word of lower) {
      modified.push(word[0].toUpperCase()+word.slice(1));
    }
  }else if (convention === "Camel Case"){
    modified.push(lower[0]);
    for (const word of lower.slice(1)) {
      modified.push(word[0].toUpperCase()+word.slice(1));
    }
  }else{
    result.textContent = "Error!";
    return;
  }

  result.textContent = modified.join("");

}