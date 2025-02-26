//a)The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.
//b)
function currencyAddition(floata, float2){
floata=parseFloat(floata);
float2=parseFloat(float2);
let floataddition=floata+float2;
return(floataddition);
}
console.log(currencyAddition(4.8888,2030.895432));

function currencyOperation(floata, floatb, operation, numDecimals ){
    floata=floata.toFixed(numDecimals);
    floatb=floatb.toFixed(numDecimals);
    floata=parseFloat(floata);
    floatb=parseFloat(floatb);
    switch (operation) {
        case "+":
          console.log("Addition Result= ",floata+floatb);
          break;
        case "-":
            console.log("Subtration Result= ",floata-floatb);
        case "*":
          console.log("Multiplication Result= ",floata*floatb);
          break;
          case "/":
            console.log("Division Result= ",floata/floatb);
            break;
        default:
          console.log("Sorry, we could not serve you now");
      }

          }
          currencyOperation(4.88,7.88,'+',5);
          currencyOperation(4.88,7.88,'/',5);
          currencyOperation(4,7,'+',5);
          