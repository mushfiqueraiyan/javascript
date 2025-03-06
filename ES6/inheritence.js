class vehicle{
    constructor(name, price){
        this.name = name
        this.price= price
    }

    move(){
        console.log("I can move in road")
    }
}

class bus extends vehicle{
    constructor(name, price, seat){
        super(name,price);
        this.seat = seat
    }
    route(){
        console.log("Dhaka to Cox's");
    }
}

const greenLine = new bus("Green line", "500", "02")
console.log(greenLine)