/**
 * chair - 3 cft
 * table - 10cft
 * bed - 50cft
 */

function woodCalculate(chair, table, bed){
    const perChairWood = 3
    const perTableWood = 10
    const perBedWood = 50

    const allChairWood = chair * perChairWood
    const allTableWood = table * perTableWood
    const allBedWood = bed * perBedWood

    const totalWood = allChairWood + allTableWood + allBedWood
    return totalWood
}

const wood = woodCalculate(0, 0, 1)
console.log(wood + "cft Wood")



/**
 *  shirt price  - 500taka
 * pent price - 300 taka
 *  shoe price - 900 taka
 */


function clothPriceTotal(shirt, pent, shoe){
    const shirtPrice = 400
    const pentPrice = 500
    const shoePrice = 1000

    const totalShirtPrice = shirt * shirtPrice
    const totalPentPrice = pent * pentPrice
    const totalShoePrice = shoe * shoePrice

    const totalPrice = totalShirtPrice + totalPentPrice + totalShoePrice

    return totalPrice

}


const clothPrice = clothPriceTotal(2,2,1)
console.log(clothPrice + "Taka")