// Inch to feet converter
function inchToFeet(inch){
    const feet = inch / 12
    return feet
}

const height = inchToFeet(64)
console.log(height)


function inchToFeet2(inch){
    const feetFraction = inch / 12
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12

    const result = feetNumber + " ft " + inchRemaining + " inch "
    return result
}

const height2 = inchToFeet2(66);
console.log(height2)


// mile to km converter

function mileToKm(mile){
    const km = mile * 1.60934
    return km
}

const kiloMeter = mileToKm(20)
console.log(kiloMeter)