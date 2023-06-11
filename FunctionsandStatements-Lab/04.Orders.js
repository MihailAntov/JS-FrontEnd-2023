function calculatePrice(product, amount){
    const priceList = new Map();
    priceList.set('coffee',1.50);
    priceList.set('water',1.00);
    priceList.set('coke',1.40);
    priceList.set('snacks',2.00);

    console.log((priceList.get(product) * amount).toFixed(2));
}

calculatePrice('water',5);