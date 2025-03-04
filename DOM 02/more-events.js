// document.querySelector("#btn-mouse").addEventListener("mousemove", function () {
//   console.log("wow");
// });

// 06
document.querySelector('#user-name').addEventListener('focus', function(){
    console.log('Focused Dont Distrub')
})
document.querySelector('#user-name').addEventListener('keyup', function(e){
    console.log('Focused Dont Distrub', e.target.value)
})