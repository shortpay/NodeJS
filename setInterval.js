//LFG: Preferência de criar a estrutura da função ao invés de criar dentro do parâmetro do setInterval (function, interval)

//MODELO LFG
var fcnPrintDate = function(){
	console.log('Data = ' + new	Date());
}

var _interval = setInterval(fcnPrintDate,1000);


//MODELO RODRIGO
//setInterval(function () {
//	console.log('I ' + new Date());
//}, 1000);


//CANCELANDO O INTERVAL
setTimeout(function(){
	clearInterval(_interval);
},5000)