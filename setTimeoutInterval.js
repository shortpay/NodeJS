
// LFG: Essa é uma forma braçal de se fazer uma execução por intervalo
// 		deve-se utilizar o setInterval ao invés de setTimeout

var interval = function (callback, time) {
	setTimeout(function () {
		callback();
		interval(callback, time);
	}, time);
};

interval(function () {
	console.log('R ' + new Date());
}, 1000);
