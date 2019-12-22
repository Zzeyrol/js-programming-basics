// Здесь должен быть итоговый код калькулятора

function summ(){
var go = Number(document.getElementById('first_number').value)
var just = Number(document.getElementById('second_number').value)	
var otvet = go + just
document.getElementById("result").innerHTML = otvet 
}
function vijitanie(){
var go = Number(document.getElementById('first_number').value)
var just = Number(document.getElementById('second_number').value)	
var otvet = go - just
document.getElementById("result").innerHTML = otvet 
}
function umnojnie(){
var go = Number(document.getElementById('first_number').value)
var just = Number(document.getElementById('second_number').value)	
var otvet = go * just
document.getElementById("result").innerHTML = otvet 
}
function delenie(){
var go = Number(document.getElementById('first_number').value)
var just = Number(document.getElementById('second_number').value)	
var otvet = go / just
document.getElementById("result").innerHTML = otvet 
}
console.log('Скрипт загружен');
