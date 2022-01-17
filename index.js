import { myFunctions, anotherFunction } from './modules.js';


var div = document.getElementById('renderhere');
div.innerHTML = myFunctions.hello("Heinrich");

var div2 = document.getElementById('renderhere2');
div2.innerHTML = myFunctions.goodbye('Heinrich');

document.getElementById('renderhere3').innerHTML = anotherFunction();