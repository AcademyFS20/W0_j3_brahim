function delta(a,b,c){


var x1,x2,x;
var delta = Math.pow(b,2)-(4*a*c) 

if (delta>0){
    x1=(-b-Math.sqrt(delta))/(2*a)
    x2=(-b+Math.sqrt(delta))/(2*a)
    console.log (x1,x2)
}
else if (delta=0){
    x=(-b-Math.sqrt(delta))/(2*a)
    consol.log(x)
}
else (delta<0){ 
    console.log(nosolution)
}
}





    