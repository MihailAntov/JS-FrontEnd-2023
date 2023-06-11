function calculateExpenses(losses,helmet,sword,shield,armor){
    let expenses = helmet * (Math.trunc(losses/2))
                + sword * (Math.trunc(losses/3))
                + shield * (Math.trunc(losses/6))
                + armor * (Math.trunc(losses/12));

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

calculateExpenses(7,2,3,4,5);