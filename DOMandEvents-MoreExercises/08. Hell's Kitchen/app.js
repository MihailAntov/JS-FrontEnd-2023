function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputs = JSON.parse(document.querySelector("#inputs textarea").value);

      let restaurants = [];
      for (const input of inputs) {
         let [name, workerInput] = input.split(" - ");
         let restaurant = {name:name};
         if(restaurants.find(r=> r.name === name)){
            restaurant = restaurants.find(r=> r.name === name);
         }
         let workers = workerInput.split(", ");
         for (const worker of workers) {
            let [workerName, salary] = worker.split(" ");
            restaurant[workerName] = salary;
         } 
         restaurants.push(restaurant);
      }

      restaurants = restaurants.sort((a,b)=> {
         let sumA = Object.values(a).slice(1).reduce((sum, current)=> sum+= Number(current), 0);
         let sumB = Object.values(b).slice(1).reduce((sum, current)=> sum+= Number(current), 0);
   
         return (sumB / (Object.values(b).length - 1)) - (sumA / (Object.values(a).length - 1));
      })

      let bestRestaurant = restaurants[0];
      let salaries = Object.values(bestRestaurant).slice(1).sort((a,b)=> b-a);
      let avgSalary = salaries.reduce((sum, current)=> sum+= Number(current), 0) / salaries.length;
      let bestSalary = Number(salaries[0]).toFixed(2);

      

      
      let firstLine = `Name: ${bestRestaurant.name} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary}`;
      let secondLine = Object.entries(bestRestaurant).slice(1).sort((a, b)=> b[1] - a[1]).map(([name,salary]) => `Name: ${name} With Salary: ${salary}`).join(" ");

      document.querySelector("#bestRestaurant p").textContent = firstLine;
      document.querySelector("#workers p").textContent = secondLine;
      
      
   }
}