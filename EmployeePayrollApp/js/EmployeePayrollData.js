const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");

class EmployeePayrollData {

  get name() {
    return this._name;
  }

  set name(name) {
    if (nameRegex.test(name)) 
        this._name = name;
    else throw "Incorrect name";
  }

}
