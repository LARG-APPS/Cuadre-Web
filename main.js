var nombre = 'Cuadre Web'

var unoLabel = document.getElementById('label-uno')
var dosLabel = document.getElementById('label-dos')
var tresLabel = document.getElementById('label-tres')
var cuatroLabel = document.getElementById('label-cuatro')
var cincoLabel = document.getElementById('label-cinco')
var seisLabel = document.getElementById('label-seis')
var sieteLabel = document.getElementById('label-siete')
var ochoLabel = document.getElementById('label-ocho')
var nueveLabel = document.getElementById('label-nueve')
var diezLabel = document.getElementById('label-diez')

var uno = document.getElementById('uno')
var dos = document.getElementById('dos')
var tres = document.getElementById('tres')
var cuatro = document.getElementById('cuatro')
var cinco = document.getElementById('cinco')
var seis = document.getElementById('seis')
var siete = document.getElementById('siete')
var ocho = document.getElementById('ocho')
var nueve = document.getElementById('nueve')
var diez = document.getElementById('diez')

var unoResult = document.getElementById('uno-result')
var dosResult = document.getElementById('dos-result')
var tresResult = document.getElementById('tres-result')
var cuatroResult = document.getElementById('cuatro-result')
var cincoResult = document.getElementById('cinco-result')
var seisResult = document.getElementById('seis-result')
var sieteResult = document.getElementById('siete-result')
var ochoResult = document.getElementById('ocho-result')
var nueveResult = document.getElementById('nueve-result')
var diezResult = document.getElementById('diez-result')

uno.value = localStorage.getItem('uno')
dos.value = localStorage.getItem('dos')
tres.value = localStorage.getItem('tres')
cuatro.value = localStorage.getItem('cuatro')
cinco.value = localStorage.getItem('cinco')
seis.value = localStorage.getItem('seis')
siete.value = localStorage.getItem('siete')
ocho.value = localStorage.getItem('ocho')
nueve.value = localStorage.getItem('nueve')
diez.value = localStorage.getItem('diez')
refresh()

uno.oninput = function(){
  refresh()
}
dos.oninput = function() {
  refresh()
}
tres.oninput = function() {
  refresh()
}
cuatro.oninput = function() {
  refresh()
}
cinco.oninput = function() {
  refresh()
}
seis.oninput = function() {
  refresh()
}
siete.oninput = function() {
  refresh()
}
ocho.oninput = function() {
  refresh()
}
nueve.oninput = function() {
  refresh()
}
diez.oninput = function() {
  refresh()
}

function refresh(){
  unoResult.innerText = (uno.value * unoLabel.innerText); 
  dosResult.innerText = (dos.value * dosLabel.innerText); 
  tresResult.innerText = (tres.value * tresLabel.innerText); 
  cuatroResult.innerText = (cuatro.value * cuatroLabel.innerText); 
  cincoResult.innerText = (cinco.value * cincoLabel.innerText); 
  seisResult.innerText = (seis.value * seisLabel.innerText); 
  sieteResult.innerText = (siete.value * sieteLabel.innerText); 
  ochoResult.innerText = (ocho.value * ochoLabel.innerText); 
  nueveResult.innerText = (nueve.value * nueveLabel.innerText); 
  diezResult.innerText = (diez.value * diezLabel.innerText); 

  var total = ((+(unoResult.innerText)) + (+(dosResult.innerText)) + (+(tresResult.innerText)) + (+(cuatroResult.innerText)) + (+(cincoResult.innerText)) + (+(seisResult.innerText)) + (+(sieteResult.innerText)) + (+(ochoResult.innerText)) + (+(nueveResult.innerText)) + (+(diezResult.innerText)))
  
  if (total > 0) {
    document.getElementsByTagName('h1')[0].innerText = 'Total: ' + total
  } else {
    document.getElementsByTagName('h1')[0].innerText = nombre
  }

}

document.getElementById('save').onclick = function(){
  localStorage.setItem('uno', uno.value)
  localStorage.setItem('dos', dos.value)
  localStorage.setItem('tres', tres.value)
  localStorage.setItem('cuatro', cuatro.value)
  localStorage.setItem('cinco', cinco.value)
  localStorage.setItem('seis', seis.value)
  localStorage.setItem('siete', siete.value)
  localStorage.setItem('ocho', ocho.value)
  localStorage.setItem('nueve', nueve.value)
  localStorage.setItem('diez', diez.value)
}

document.getElementById('clear').onclick = function clear(){
  uno.value = '';
  dos.value = '';
  tres.value = '';
  cuatro.value = '';
  cinco.value = '';
  seis.value = '';
  siete.value = '';
  ocho.value = '';
  nueve.value = '';
  diez.value = '';
  
  refresh()
}