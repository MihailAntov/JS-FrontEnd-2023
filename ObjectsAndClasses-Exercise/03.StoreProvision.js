function solve(stock, order){
    let store = {}
    while(stock.length > 0){
        let item = stock.shift();
        if(!store.hasOwnProperty(item)){
            store[item] = 0;
        }
        let quantity = Number(stock.shift());
        store[item] += quantity;
    }

    while(order.length > 0){
        let item = order.shift();
        if(!store.hasOwnProperty(item)){
            store[item] = 0;
        }
        let quantity = Number(order.shift());
        store[item] += quantity;
    }
    let entries = Object.entries(store);
    for (const [product, amount] of entries) {
        console.log(`${product} -> ${amount}`)
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])