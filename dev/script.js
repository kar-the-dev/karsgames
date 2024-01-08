var translated;
document.getElementById('input').onkeyup = function(e){
  translated = " " + document.getElementById('input').value;
  translate(e);
  document.getElementById('output').innerHTML = translated;
}
