const display = document.getElementById("display");
let inputtimes = 0;
let finput = 0;

function appendtodisplay(input) {
  if (["-", "+", "/", "*"].includes(input)) {
    // handle operation
    decide(input);
    return;
  }
  const inputValue = parseInt(input);
  display.value = inputValue;

  if (display.value == isNaN && finput === 0) {
    inputtimes = 1;
    let num1 = inputValue;
    decide(num1, inputtimes);
  } else if ((display.value !== isNaN) & (!finput === 0)) {
    num2 = inputValue;
    inputtimes = 3;
    decide(num2, inputtimes);
  } else {
    inputtimes = 2;
    console.log();
    decide(input.value, inputtimes);
  }
}

// decide depend on the variable kind and call appendtodisplay times
function decide(nors, times) {
  let nvalue1,
    nvalue2,
    sign = 0;
  if (times === 1) {
    nvalue1 = nors;
  } else if (times === 2) {
    sign = nors;
  } else {
    nvalue2 = nors;
  }
  calculate(nvalue1, nvalue2, sign);
}

function cleardisplay() {
  display.value = " ";
}

//make math operation by type of received sign

function calculate(value1, value2, signtype) {
  if (signtype === "+") {
    fetch(`/calculator/add?num1=${value1}&num2=${value2}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result").innerHTML = data.result;
        display.value = data.result;
      });
  }
  return;

  // TODO: Update these to match the example above for '"+"
  if ((signtype = "-")) {
    display.value = fetch(`/calculator/subtract?num1=${value1}&num2=${value2}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result").innerHTML = data.result;
      });

    if ((signtype = "/")) {
      display.value = fetch(`/calculator/divide?num1=${value1}&num2=${value2}`)
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("result").innerHTML = data.result;
        });
    }
  }
}
