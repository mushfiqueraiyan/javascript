const a = 10;

const first = ()=>{
    second()
    console.log("This is First Function");
}

const second = ()=>{
    third()
    console.log("This is Second Function");
}

const third = ()=>{
    setTimeout(()=>{
        console.log("This is Third Function");
    }, 2000)
}

const b = 20;

console.log(first());
console.log("Shb function print kora shesh")




