let nums = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".oper");
let equal = document.getElementById("equal");
let input = document.getElementById("input-num");
let result = document.getElementById("result");
let history = document.querySelector(".history");
let historyHead = document.querySelector(".history h6");
// Restart value used to make sure that the numbers are concated when needed or the result is deleted and the number replaces it 
let restart = true;

function runOperation(){
  result.textContent = eval(input.value);
  createNewHistory();
  restart = true;
  input.value = result.textContent;
}

function createNewHistory(){
  let newP = document.createElement("p");
  newP.textContent = input.value.concat("=").concat(result.textContent);
  history.insertBefore(newP, historyHead.nextElementSibling);
}

// NUMBERS
nums.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(restart)
    if (restart) {
      input.value = el.value.toString();
      restart = false;
    } else {
      input.value = input.value.concat(el.value.toString());
    }
    console.log(restart);
  });
});

// OPERATORS
operators.forEach((el) => {
  el.addEventListener("click", function () {
    input.value = input.value.concat(el.value.toString());
    restart = false;
  });
});

// EQUAL SIGN
equal.addEventListener("click", function () {
  runOperation(); 
});

// INPUT
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    runOperation();
  }
});

