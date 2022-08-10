/**
 fixed: per item wood requirements
 1. chair --> 3 cft
 2. table --> 10 cft
 3. bed --> 50 cft

 vary: quantity
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = ChairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(1, 1, 1);
console.log('total wood required: ', totalWood);
