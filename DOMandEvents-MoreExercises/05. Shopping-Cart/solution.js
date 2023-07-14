function solve() {
   let addButtons = [...document.querySelectorAll(".product > .product-add > .add-product")];
   addButtons.forEach(b=> b.addEventListener("click",clickHandler));
   let outputArea = document.querySelector("textarea");
   let buyButton = document.querySelector(".checkout");
   buyButton.addEventListener("click",buyHandler);
   let products = [];
   
   function clickHandler(e){
      let product = e.currentTarget.parentElement.parentElement;
      let name = product.querySelector(".product-details").querySelector(".product-title").textContent;
      let price = Number(product.querySelector(".product-line-price").textContent).toFixed(2);
      outputArea.textContent += `Added ${name} for ${price} to the cart.\n`;
      products.push({name:name, price:price});
      
   }

   function buyHandler(e){
      let list = [];
      for (const purchase of products.map(p=> p.name)) {
         if(!list.includes(purchase)){
            list.push(purchase);
         }
      }
      let total = products.map(p=> Number(p.price)).reduce((sum, item)=> sum+= item, 0);
      let message = `You bought ${list.join(", ")} for ${total.toFixed(2)}.`;

      outputArea.textContent+=message;

      let buttons = [...document.querySelectorAll("button")];
      buttons.forEach(b=> b.disabled = true);
   }
}