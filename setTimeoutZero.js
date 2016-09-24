//LFG: Na primeira passagem pelo EVENT LOOP, colocar para executar A e B
//     e registra ASYNC, somente no segundo loop do EVENT LOOP
//     é que a instrução é executada (MODELO ASYNCRONO DE EXECUÇÃO)


function fDate(label){
	
	console.log(label + ' = ' + new Date());
	
}


fDate('A');
fDate('B');


setTimeout(fDate('ASYNC ZERO'), 0);

setImmediate(function(){
	console.log('ASYNC IMMEDIATE = ' + new Date());
});
