const addToStorage = ()=>{
    const name = "Raiyan"
    localStorage.setItem("nam", name);
}

const addTo = ()=>{
    const person = {
        name: "Mushfique Raiyan",
        age: 20,
        location: 'Syllhet'
    }

    const converToString = JSON.stringify(person);
    const reConvertToObject = JSON.parse(person)
   
    localStorage.setItem("info", converToString)

    
}

const data = localStorage.getItem("info")
const converted = JSON.parse(data)
console.log(converted)


 function pronounceWord(word) {
   const utterance = new SpeechSynthesisUtterance(word);
   utterance.lang = "en-EN"; // English
   window.speechSynthesis.speak(utterance);
 }