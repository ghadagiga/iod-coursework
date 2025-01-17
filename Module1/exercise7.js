
add=addition(2,3);
diff=differ(5,6);
mult=multiply(7,8);
div=division(9,3);
console.log(add);
console.log(diff);
console.log(mult);
console.log(div);
greetingme('GHADA');
//this function recives two numbers
//  then adds them and returns the result
function addition(a,b){
return(a+b);
}
//addition valdation test in 3 attemptings

if(addition(2,4)!=6){
    throw error
    }
    if(addition(7,-4)!=3){
        throw error
        }
        if(addition(5,5)!=10){
            throw error
            }
//this function recives two numbers then subtracts 
// them and returns the result

function differ(a,b){
    return(a-b);
}
//differ valdation test in 3 attemptings
if(differ(2,2)!=0){
    throw error
    }
    if(differ(20,0)!=20){
        throw error
        }  
        if(differ(24,2)!=22){
            throw error
            }
//this function recives two numbers
//  then multiplies them and returns the result
function multiply(a,b){
    return(a*b)
}
//multiply valdation test in 3 attemptings

if(multiply(2,2)!=4){
    throw error
    }
    if(multiply(20,0)!=0){
        throw error
        }
        if(multiply(24,2)!=48){
            throw error
            }
//this function recives two numbers
//  then divides them and returns the result
function division(a,b){
    return(a/b);
}
//division valdation test in 3 attempting
if(division(2,2)!=1){
    throw error
    }
    if(division(20,2)!=10){
        throw error
        } 
        if(division(24,-2)!=-12){
            throw error
            } 

function greetingme(me){
let greeting="Hello";
let greetingyou=greeting.concat(" ", me);
   console.log(greetingyou);
}