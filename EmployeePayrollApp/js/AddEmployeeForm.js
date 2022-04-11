window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
        textError.textContent = "";
        return;
    }
    try {
        new EmployeePayrollData.name = name.value;
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


function save() {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = document.querySelector("#name").value;
  } catch (e) {
    setTextValue('.text-error', e);
    throw e;
  }

  let date = document.querySelector("#month").value + " " + document.querySelector("#day").value + ", " + document.querySelector("#year").value;
  try {
    employeePayrollData.startDate = new Date(date);
  } catch (error) {
    alert(error);
    return;
  }
}
