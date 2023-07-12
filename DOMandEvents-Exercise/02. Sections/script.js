function create(words) {
   for (const word of words) {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");
      newParagraph.style.display = "none";
      newDiv.appendChild(newParagraph);
      newParagraph.textContent = word;
      newDiv.addEventListener("click",clickHandler);
      document.querySelector("#content").appendChild(newDiv);

   }

   function clickHandler(e){
      e.target.children[0].style.display = "inline";
   }
}