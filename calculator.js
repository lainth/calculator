// MATH FUNC
const add = (nb1, nb2) => {
  return nb1 + nb2;
};

const subtract = (nb1, nb2) => {
  return nb1 - nb2;
};

const multiply = (nb1, nb2) => {
  return nb1 * nb2;
};

const divide = (nb1, nb2) => {
  if (nb1 == 0 || nb2 == 0) {
    return "ERROR";
  }
  let res = parseFloat(nb1) / parseFloat(nb2);
  let rounded = parseFloat(res.toFixed(2));
  return rounded;
};

const operate = (operator, nb1, nb2) => {
  if (operator == "+") {
    return add(nb1, nb2);
  } else if (operator == "-") {
    return subtract(nb1, nb2);
  } else if (operator == "*") {
    return multiply(nb1, nb2);
  } else if (operator == "/") {
    return divide(nb1, nb2);
  }
};

// CALCULATOR
let nb1 = "";
let nb2 = "";
let tmp = "";
let operator = "";
let res = 0;

let isClicked = false;
let isFloat = false;

const buttonNb = document.getElementsByClassName("nb");
const buttonClear = document.getElementById("clear");
const buttonDel = document.getElementById("del");
const buttonOperator = document.getElementsByClassName("operator");
const buttonEqual = document.getElementById("equal");
const buttonDecimal = document.getElementById("dec");
const buttonNegate = document.getElementById("neg");

document.getElementById("displayNb").textContent = 0;

for (let i = 0; i < buttonNb.length; i++) {
  buttonNb[i].addEventListener("click", (e) => {
    tmp += e.target.value;
    document.getElementById("displayNb").innerHTML = tmp;
  });
}

for (let i = 0; i < buttonOperator.length; i++) {
  buttonOperator[i].addEventListener("click", (e) => {
    operator = e.target.value;
    if (isFloat == true) {
      nb1 = parseFloat(tmp);
    } else {
      nb1 = parseInt(tmp);
    }
    tmp = "";
    isClicked = false;
  });
}

buttonDecimal.addEventListener("click", (e) => {
  tmp += e.target.value;
  isFloat = true;
});

buttonNegate.addEventListener("click", () => {
  isClicked = !isClicked;
  if (tmp > 0) {
    isClicked = true;
    tmp = -Math.abs(tmp);
    document.getElementById("displayNb").innerHTML = tmp;
  } else if (tmp < 0) {
    isClicked = false;
    tmp = Math.abs(tmp);
    document.getElementById("displayNb").innerHTML = tmp;
  }
});

buttonEqual.addEventListener("click", () => {
  if (isFloat == true) {
    nb2 = parseFloat(tmp);
  } else {
    nb2 = parseInt(tmp);
  }
  res = operate(operator, nb1, nb2);
  if (!res.isInteger) {
    document.getElementById("displayNb").innerHTML = parseFloat(res.toFixed(2));
  } else {
    document.getElementById("displayNb").innerHTML = res;
  }
  tmp = res;
  nb1 = "";
  nb2 = "";
  isClicked = false;
});

buttonDel.addEventListener("click", () => {
  let tmpStr = tmp.toString();
  tmp = tmpStr.slice(0, -1);
  document.getElementById("displayNb").innerHTML = tmp;
});

buttonClear.addEventListener("click", () => {
  document.getElementById("displayNb").textContent = 0;
  nb1 = 0;
  nb2 = 0;
  isClicked = false;
  tmp = "";
});

//KEYBOARD HANDLING
window.onkeydown = (e) => {
  e.preventDefault();
  switch (e.key) {
    case "Backspace":
      let tmpStr = tmp.toString();
      tmp = tmpStr.slice(0, -1);
      document.getElementById("displayNb").innerHTML = tmp;
      break;
    case "Enter":
      if (isFloat == true) {
        nb2 = parseFloat(tmp);
      } else {
        nb2 = parseInt(tmp);
      }
      res = operate(operator, nb1, nb2);
      if (!res.isInteger) {
        document.getElementById("displayNb").innerHTML = parseFloat(
          res.toFixed(2)
        );
      } else {
        document.getElementById("displayNb").innerHTML = res;
      }
      tmp = res;
      nb1 = "";
      nb2 = "";
      isClicked = false;
      break;
    case "+":
    case "/":
    case "-":
    case "*":
      operator = e.key;
      if (isFloat == true) {
        nb1 = parseFloat(tmp);
      } else {
        nb1 = parseInt(tmp);
      }
      tmp = "";
      isClicked = false;
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      tmp += e.key;
      document.getElementById("displayNb").innerHTML = tmp;
      break;
    case ".":
      tmp += e.key;
      isFloat = true;
      break;
    case "Escape":
      document.getElementById("displayNb").textContent = 0;
      nb1 = 0;
      nb2 = 0;
      isClicked = false;
      tmp = "";
      break;
  }
};
