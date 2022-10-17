let username=prompt("lüttfen adınızı giriniz.")
let myName=document.querySelector("#myName")

myName.innerHTML=(username)

let time= new Date().toLocaleString('tr-TR');
document.getElementById('myClock').innerHTML=time




