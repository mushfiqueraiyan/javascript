class person{
    #status  // this is called encapsulation so that you cant access this outside the function
    constructor(name,age, status){
        this.name = name
        this.age = age;
        this.#status = status
    }
    sleep(){
        console.log(`${this.name} sleeps at 1:30 AM`)
    }

    action(){
        console.log(this.#status)  // this can help you to access this outside the function
    }
}

const raiyan = new person("Raiyan", 20, 'single');
console.log(raiyan)
raiyan.sleep()


console.log(this)

console.log(raiyan.name)
console.log(raiyan.status)

raiyan.action()