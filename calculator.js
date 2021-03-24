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
  if (nb1 / 0) {
    return "ERROR";
  }
  return nb1 / nb2;
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

// EVENT HANDLING
let nb1 = "";
let nb2 = "";
let tmp = "";
let operator = "";
let res = 0;

let buttonNb = document.getElementsByClassName("nb");
const buttonClear = document.getElementById("clear");
const buttonOperator = document.getElementsByClassName("operator");
const buttonEqual = document.getElementById("equal");

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
    nb1 = parseInt(tmp);
    tmp = "";
  });
}

buttonEqual.addEventListener("click", () => {
  nb2 = parseInt(tmp);
  res = operate(operator, nb1, nb2);
  document.getElementById("displayNb").innerHTML = res;
  tmp = res;
});

buttonClear.addEventListener("click", () => {
  document.getElementById("displayNb").textContent = 0;
  nb1 = 0;
  nb2 = 0;
  tmp = "";
});
