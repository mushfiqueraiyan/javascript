const head = document.querySelector('h1')
console.log(document)
console.log(document.body)
// console.log(document.lastChild)


const liCollection = document.getElementsByTagName('li')
for(const li of liCollection){
    console.log(li.innerText)
}

const allHeading = document.getElementsByTagName('h1') // its optional we will not use it 
for(const h1 of allHeading){
    console.log(h1.innerText)
}

//03

const fruitTitle = document.getElementById("fruits-title");
fruitTitle.style.background = 'white'
fruitTitle.style.color = 'black'
fruitTitle.innerText = 'Fruits Title changes by JavaScript Hahahahah '

const places = document.getElementsByClassName("important-places");
for(const place of places){
    place.style.color = 'red'
}

//04

const someLi = document.querySelectorAll(".fruits-container li");
for(const li of someLi){
    console.log(li.innerText) //HM: Html Collect vs NodeList
}


//05