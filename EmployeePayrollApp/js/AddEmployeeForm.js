window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
        textError.textContent = "";
        return;
    }
    try {
        new EmployeePayrollData().name = name.value;
        textError.textContent = "";
    } catch (e) {
        textError.textContent = e;
    }
  });

  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
        output.textContent = salary.value;
  });
});

// const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
// const text = document.querySelector("#name");
// const textError = document.querySelector(".text-error");
// text.addEventListener("input", function () {
//   if (nameRegex.test(text.value)) {
//     textError.textContent = "";
//   } else {
//     textError.textContent = "Incorrect name";
//   }
// });

// const salary = document.querySelector("#salary");
// const output = document.querySelector(".salary-output");
// output.textContent = salary.value;
// salary.addEventListener("input", function () {
//   output.textContent = salary.value;
// });
