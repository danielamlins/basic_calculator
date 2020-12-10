let nums = document.querySelectorAll(".num");
let input = document.getElementById("input-num");
let operators = document.querySelectorAll(".oper");

// Restart value used to make sure that the numbers are concated when needed or the result is deleted and the number replaces it 
let restart = true;

// NUMBERS
nums.forEach((el) => {
  el.addEventListener("click", function () {
    if (restart) {
      input.value = el.value.toString();
      restart = false;
    } else {
      input.value = input.value.concat(el.value.toString());
    }
  });
});

// OPERATORS
operators.forEach((el) => {
  el.addEventListener("click", function () {
    input.value = input.value.concat(el.value.toString());
    restart = false;
  });
});
