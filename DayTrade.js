<script>

var valorRealtxt = prompt("Deixe de ser um trouxa, invista conosco e se torne um bruxo trouxa. Agora nos diga, quanto você possui para investir?")

var valorReal = parseFloat(valorRealtxt)

var Galeao = (valorReal/125)
var restoGaleao = valorReal % 125

var Sicle = (restoGaleao/7.50)
var restoSicle = restoGaleao % 7.50

var Nuque = (restoSicle/0.25)

Galeao = Galeao.toFixed(2)
Sicle = Sicle.toFixed(2)
Nuque = Nuque.toFixed(2)

alert("Você possui " + Galeao + " Galeões")
alert(Sicle + " Sicles")
alert("e " + Nuque + " Nuques")

alert("Um Galeao vale R$ 125,00")
alert("Um Sicle equivale a R$ 7,50")
alert("Cada Nuque vale R$ 0,25")

</script>