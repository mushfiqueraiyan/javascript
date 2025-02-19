function calculateVAT(amount){
    if (amount <= 0 || typeof amount !== 'number') {
      return "Invalid";
    } 
    else {
        return amount * 7.5/100
    }
}





function validContact(contact){
    if(typeof contact === 'string' && contact !== " " && contact.length === 11 && contact.startsWith("01")){
        return true;
    }
    else if(typeof contact !== 'string'){
        return 'Invalid';
    }
    else{
        return false
    }
}





function willSuccess(marks){

    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let pass = []
    let fail = []

    for(const mark of marks){
        if(mark < 50){
        fail.push(mark)
        }
        else {
        pass.push(mark)
        }
    }
    if (pass.length > fail.length) {
        return true;
    
    } else {
        return false;
    }
}





function validProposal(person1, person2){
    if(typeof person1 !== 'object' || typeof person2 !== 'object'){
        return "Invalid"
    }
    if(person1.gender !== person2.gender){
        if (Math.abs(person1.age - person2.age) < 7) {
          return true;
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}




function calaculateSleepTime(times){
    for(const time of times){
        if(typeof time !== 'number'){
            return 'Invalid'
        }
    }

    let totalNumber = 0
    for(const sec of times){
        totalNumber += sec
    }

    let hour = 0
    let min = 0
    let sec = 0

    if(totalNumber >= 3600){
        hour = Math.floor(totalNumber / 3600)
        totalNumber -= hour * 3600
    }

    if(totalNumber >= 60){
        min = Math.floor(totalNumber / 60)
        totalNumber -= min * 60
    }

    sec = totalNumber

    return { hour: hour, min: min, sec: sec}
}



function timeCalc(times){
    
}