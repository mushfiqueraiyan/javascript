const salary = 25000;
const isBCS = true
const height = 61;
const hasCar = false

if(salary > 20000 && isBCS == false){
    console.log("Suuu patro");
}
else{
    console.log("Onnno patro khujo")
}

// complex condition

if((salary > 24000 && hasCar == true) || isBCS == true){
    console.log("Suuu patro kobul");
}


// Multiple condition

const price = 5000

if(price >= 5000){
    const discount = price * 10 / 100;
    const payAmount = price - discount
    console.log(discount)
    console.log(payAmount)
}


// restaurant 

const age = 17;
const foodPrice = 500

if (age < 12 ){
    console.log("You can eat for Free!!")
}
else if (age >= 60 ){
    const disPrice = foodPrice * 50 / 100
    const amt = foodPrice - disPrice
    console.log(amt)
}
else{
    console.log(foodPrice)
}



// Nasted If else condition

const money = 0;

if (money > 300){
    console.log("Bro you are so rich");
}
else {
    if(money > 100){
        console.log("Tui gorib o na boro luk o na ")
    }
    else {
        if (money > 0){
            console.log("kola kha calcium bara")
        }
        else{
            console.log("amr kase taka nai")
        }
    }
}


// ternary condition operator --> its mean three part


let boyosh = 12;
boyosh >= 18 ? console.log("vote dio") : console.log("vote dite parbe na ")



let hayat = 12

let res = hayat >= 18 ? 
            hayat <= 35 ? "able" 
                : "unable" 
                    : "not allowd"

console.log(res)



























































































































































































































































































































































































