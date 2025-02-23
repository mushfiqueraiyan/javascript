function clicked(){
    alert('THe button is clicked so badly')
}

function checked(){
    alert('07')
}


//02

function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
    document.body.style.color = "black";
}

function reset(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = "black";
    document.body.style.rotate = "0deg";
}

const btn = document.querySelector("#btn-make-blue");
btn.addEventListener('click', function blue(){
    document.body.style.backgroundColor = 'blue'
    document.body.style.color = 'white'
})

// Optional Version of click we will use addEvent all the time
const btnPurple = document.querySelector("#btn-make-purple");
btnPurple.onclick = makePurple
function makePurple(){
    document.body.style.backgroundColor = 'purple'
    document.body.style.color = "white";
}


//03

document.getElementById('btn-make-green').addEventListener('mouseout', function makeGreen(){
    document.body.style.backgroundColor = 'green'
    document.body.style.color = 'white'
    document.body.style.rotate = '-10deg'
})


//04

