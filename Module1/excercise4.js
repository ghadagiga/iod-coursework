
add=addition(2,3);
diff=differ(5,6);
mult=multiply(7,8);
div=division(9,3);
console.log(add);
console.log(diff);
console.log(mult);
console.log(div);
greetingme('GHADA');
function addition(a,b){
return(a+b);
}

function differ(a,b){
    return(a-b);
}

function multiply(a,b){
    return(a*b)
}

function division(a,b){
    return(a/b);
}

function greetingme(me){
let greeting="Hello";
let greetingyou=greeting.concat(" ", me);
   console.log(greetingyou);
}