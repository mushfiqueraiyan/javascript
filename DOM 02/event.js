// 04
const change = document.querySelector("#title-chng");
const title = document.querySelector("#title");
change.addEventListener('click', function(){
    title.innerText = 'Updated Page TItle'
})


document.querySelector('#login').addEventListener('click', function(){
    document.querySelector('#user-info').innerText = 'Logged In'
})