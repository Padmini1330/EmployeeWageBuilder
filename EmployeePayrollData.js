class EmployeePayrollData
{
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id = id;
    }
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        this._name = name;
    }
    get salary()
    {
        return this._salary;
    }
    set salary(salary)
    {
        this._salary = salary;
    }
    toString()
    {
        return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());