function isLeapYear(year){
    if(year % 4 === 0){
        return true
    }
    else{
        return false
    }
}

const leapYear = isLeapYear(2024)
console.log(leapYear)


function trueLeapYear(year){  //********** */
    if(year % 4 === 0 && year % 100 !== 0){
        return true
    }
    else {
        return false
    }
}

const leapYearTrue = trueLeapYear(2040)
console.log(leapYearTrue)