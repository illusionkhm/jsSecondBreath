var num = 33721;
var toMass = num.toString().split("");
var multiple = 1;
for(var i = 0; i < toMass.length; i++){
    multiple *= parseInt(toMass[i]);
}


console.log(multiple);
console.log(Math.pow(multiple,3));