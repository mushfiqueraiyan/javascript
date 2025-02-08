const number = [12, 34,56,65, 78,66];

for(const num of number){
    console.log(num)
}

const fruits = ["apple", "banana", "watermelon", "orange"];

for(const fruit of fruits){
    console.log(fruit)
    if(fruit === "watermelon") {
        console.log("I dont want to eat")
    } else{
    console.log("I want to eat")
    }
}