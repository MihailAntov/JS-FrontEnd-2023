function search() {


   const towns = Array.from(document.querySelectorAll("#towns li"));
   const searchText = document.querySelector("#searchText");
   const outputArea = document.querySelector("#result");
   // document.querySelector("#searchText").value = "";
   let counter = 0;
   for (const town of towns) {
      if(town.textContent.includes(searchText.value)){
         counter++;
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
      }else{
         town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
      }
   }

   outputArea.textContent = `${counter} matches found`

}
