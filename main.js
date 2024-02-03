/* <Query Kind="Program" />

void Main()
{
	// Increase

	// var before = 49.6M;
	var before = 363.8M;
	var after = 225.3M;

	(((after - before) / before) * 100).ToString("0.0\\%").Dump("Performance increase");
	(after / before).ToString("0x").Dump("Times faster");

	// Reduction
    
    // https://stackoverflow.com/questions/28403939/how-to-calculate-percentage-improvement-in-response-time-for-performance-testing
    
    // var then =  1000M;
	var then =  363.8M;
    var now = 225.3M;

    // (((then - now) / then) * 100).ToString("0.0\\%").Dump("Execution time reduction");
    (((then - now) / now) * 100).ToString("0.0\\%").Dump("Performance increase");
    (then / now).ToString("0x").Dump("Times faster");


	// Size decrease

	// var then =  1000M;
	var pre = 363.8M;
	var post = 225.3M;

	(((pre - post) / pre) * 100).ToString("0.0\\%").Dump("Size reduction");
	(pre / post).ToString("0x").Dump("Times faster");
} */

var HMF = (function() {
    function calculatePerformanceIncrease() {
        console.log('DO IT')
    }
    return {
        calculatePerformanceIncrease
    }
})();
