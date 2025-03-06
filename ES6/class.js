class Product{
    owner = 'Mushfique Raiyan';

    constructor(name,price,brand,color){
        this.name = name;
        this.price = price
        this.brandName = brand
    }

    details(){
        console.log(`Ami ${this.name} product er details`);
    }
}

const iphone = new Product("Iphone", "1234", "Apple")
console.log(iphone)
iphone.details()

const xiaomi = new Product("Xiaomi", "4321", "Redmi")
console.log(xiaomi);
xiaomi.details()