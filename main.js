var form = document.getElementById("mainForm");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result = document.getElementById("result");

const checkPrime = (nb) => {
  if (nb % 2 == 0) return true;
  else return false;
};

const findPrimeNb = (nb1, nb2) => {
  let primeNb = [];

  if (nb1 === nb2) return 0;
  if (nb1 > nb2) {
    let tmp;
    tmp = nb1;
    nb1 = nb2;
    nb2 = tmp;
  }

  for (let i = nb1; i <= nb2; i++) {
    if (checkPrime(i)) {
      primeNb.push(i);
    }
  }
  return primeNb;
};

const handler = function (e) {
  e.preventDefault();
  if (isNaN(input1.value) || input1.value === "") {
    result.innerHTML = "Number1 input is not a valid number";
  }
  if (isNaN(input2.value) || input2.value === "") {
    result.innerHTML = "Number 2 input is not a valid number.";
  } else {
    var nb1 = Number(input1.value);
    var nb2 = Number(input2.value);

    if (nb1 >= 2 && nb1 <= 100 && nb2 >= 2 && nb2 <= 100) {
      var primeNb = findPrimeNb(nb1, nb2);
      var res = "There are " + primeNb.length + " even numbers:";
      if (primeNb.length > 0) {
        res = res + primeNb;
      }
      result.innerHTML = res;
    } else if (nb1 < 2 || nb1 > 100) {
      var res = "Number1 input " + nb1 + " is not in range of 2 to 100";
      result.innerHTML = res;
    } else if (nb2 < 2 && nb2 > 100) {
      var res = "Number2 input " + nb2 + " is not in range of 2 to 100";
      result.innerHTML = res;
    } else {
      result.innerHTML = "Invalid input, please try again.";
    }
  }
};

form.addEventListener("submit", handler);
