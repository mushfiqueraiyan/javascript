const heights2 = [167, 190, 120, 165, 137];

function getLowest(number){
    let lowest = number[0]
    for(const num of number){
        if(num < lowest){
            lowest = num
        }
    }
    return lowest
}

const height = getLowest(heights2)
console.log(height)



// problem 02

const heights = ["rahim", "robin", "rafi", "ron", "rashed"];

function shortName(names){
    let smallName = names[0]
    for(const name of names){
        if(name.length < smallName.length){
            smallName = name
        }
    }
    return smallName
}

const name = shortName(heights)
console.log(name)


// Problem 03

function total(laptop, tablet, mobile){
    let laptopPrice = 35000
    let tablePrice = 15000
    let mobilePrice = 20000

    const laptopTotal = laptop * laptopPrice
    const tabletTotal = tablet * tablePrice
    const mobileTotal = mobile * mobilePrice

    const total = laptopTotal + tabletTotal + mobileTotal
    return total
}

const budget = total(1,1,0)
console.log(budget)



// Problem 04

    const phones = [
      { model: "PhoneA", brand: "Iphone", price: 95000 },
      { model: "PhoneB", brand: "Samsung", price: 40000 },
      { model: "PhoneC", brand: "Oppo", price: 26000 },
      { model: "PhoneD", brand: "Nokia", price: 35000 },
      { model: "PhoneE", brand: "Iphone", price: 105000 },
      { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function avgPrice(prices){
        
        if(prices.length === 0) return 0

        let totalPrice = 0

        for(const price of prices){
            let priceAll = price.price
            totalPrice += priceAll
        }
        
        const allPrice = prices.length
        return totalPrice / allPrice
        
    }

    const allPrice = avgPrice(phones)
    console.log(allPrice)


// problem 05

 const employees = [
   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
 ];

 function salaryCalc(employees){
    let totalSalary = 0

    for(const employe of employees){
       
        let currentSalary = employe.starting + (employe.experience * employe.increment)
        totalSalary += currentSalary
    }
    return totalSalary
 }

 const salary = salaryCalc(employees)
 console.log(salary)