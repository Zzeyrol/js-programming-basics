var elem;
var output;

function showMeAlert() {
  elem = document.getElementsByTagName("input")[0].value;
  alert( "Текст из поля: " + elem );
}

function writeToConsole() {
  elem = document.getElementById("myinput").value;
  console.log( "Текст из поля: " + elem );
}

function writeToHeader() {
  elem = document.getElementsByName("mytext")[0].value;
  output = document.getElementsByClassName("myoutput")[0];

  console.log(output);

  output.innerHTML = elem;
}
