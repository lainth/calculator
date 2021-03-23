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
