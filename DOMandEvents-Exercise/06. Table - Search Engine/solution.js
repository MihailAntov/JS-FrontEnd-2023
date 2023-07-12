function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll("tbody tr"));
      rows.forEach(r=> r.classList.remove("select"));

      let searchWord = document.querySelector("#searchField").value;
      for (const row of rows) {
         let boxes = Array.from(row.children);
         if(boxes.filter(b=> b.textContent.includes(searchWord)).length > 0){
            row.classList.add("select");
            continue;
         }
      }

      document.querySelector("#searchField").value = "";
   }
}