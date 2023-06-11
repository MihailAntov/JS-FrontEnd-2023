function calculatePyramid(...args) {
    let base = args[0];
    let step = args[1];
    let floors = Math.ceil(base / 2);

    let stone = 0;
    let lapis = 0;
    let gold = 0;
    let marble = 0;
    for (let i = 1; i <= floors; i++) {
        let thisBase = base - ((i - 1) * 2);

        if (i == floors) {
            gold += (thisBase * thisBase) * step;

        }else if (i % 5 == 0) {
            lapis += (4 * thisBase - 4) * step;
        
        }        
        else {
            marble += (4 * thisBase - 4) * step;
        }
        
        if (i !== floors) {
            stone += ((thisBase - 2) * (thisBase - 2)) * step;
        }
    }

    stone = Math.ceil(stone);
    marble = Math.ceil(marble);
    lapis = Math.ceil(lapis);
    gold = Math.ceil(gold);
    let height = Math.floor(floors * step);


    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}

calculatePyramid(5, 0.75);