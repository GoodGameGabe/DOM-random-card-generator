function onLoad() {


var types = ["\u2666", "\u2665", "\u2660", "\u2663"];

var numbers = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];
                
function randomize(arr){
        var i = Math.floor(Math.random()*arr.length);
        return(arr[i]);
}

var typeResult = randomize(types);
var numberResult = randomize(numbers);

function colorpicker(){
        var y = document.getElementsByClassName('symbol');
        var aNode = y[0];
        var bNode = y[1];
        if (typeResult === "\u2666" || typeResult == "\u2665"){
                aNode.style.color = "red";
                bNode.style.color = "red";
        } else{
                aNode.style.color = "black";
                bNode.style.color = "black";
        }
}

colorpicker();

var num1 = document.getElementById("number");
var num2 = document.createTextNode(numberResult);
num1.appendChild(num2);
var sym1 = document.getElementById("top");
var sym2 = document.createTextNode(typeResult);
sym1.appendChild(sym2);
var bol1 = document.getElementById("bottom");
var bol2 = document.createTextNode(typeResult);
bol1.appendChild(bol2);
}

onLoad();