const ghotok = (patri, name)=>{
    patri(name);
}

const patri = function (name){
    console.log("Ami ki call korbo", name)
}

const partri2 = function (name){
    console.log("AMi partri 2", name);
}


ghotok(patri, "Raiyan");
ghotok(partri2, "Mushfique");