var style = require("./styles.css");
style.use(); 
console.log('Hurray! Webpack works! Example #2');

document.getElementById("button").onclick=function(){
	alert('CSS will be cleared now');
	style.unuse();
};
