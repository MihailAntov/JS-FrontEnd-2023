function solve() {
  let generateButton = document.querySelectorAll("button")[0];
  let body = document.querySelector("tbody");
  generateButton.addEventListener("click",generate);
  let buyButton = document.querySelectorAll("button")[1];
  let outputArea = document.querySelectorAll("textarea")[1];
  buyButton.addEventListener("click",getInfo);
  function generate(){
      let input = JSON.parse(document.querySelectorAll("textarea")[0].value);
      for (const entry of input) {
        let newRow = document.createElement("tr");
        newRow.innerHTML+= `<td><img src="${entry.img}"></td>`
        newRow.innerHTML+= `<td><p>${entry.name}</p></td>`;
        newRow.innerHTML+= `<td><p>${entry.price}</p></td>`;
        newRow.innerHTML+= `<td><p>${entry.decFactor}</p></td>`;
        newRow.innerHTML+= `<td><input type="checkbox"/></td>`;

        body.appendChild(newRow);
      }
  }

  function getInfo(){
    let checked = [...document.querySelectorAll(".table > tbody > tr")].slice(1).filter(r=>r.lastChild.firstChild.checked);
    
    outputArea.textContent += `Bought furniture: ${checked.map(r=> r.children[1].firstChild.textContent).join(", ")}\n`;
    outputArea.textContent += `Total price: ${checked.map(r=> r.children[2].firstChild.textContent).reduce((sum, a) => sum += Number(a), 0).toFixed(2)}\n`;
    let avgDecorationFactor = checked.map(r=> r.children[3].firstChild.textContent).reduce((sum, a) => sum += Number(a), 0) / checked.length;
    outputArea.textContent += `Average decoration factor: ${avgDecorationFactor}`;
    
    // console.log(checked);
  }
}