function input(char) {
  var res= document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML= res+char; 
}
function del() {
  var res= document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML= res.substring(0,res.length-1);
}
function clr() {
  document.getElementById('result').innerHTML='';
}
function calc() {
  var res= document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML= eval(res);
}