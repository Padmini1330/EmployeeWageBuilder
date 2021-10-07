class EmployeePayrollData 
{
    constructor(...params) 
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id() 
    {
        return this._id;
    }
    set id(id) 
    {
        let idRegx = RegExp('^[1-9][0-9]*$');
        if (idRegx.test(id))
            this._id = id;
        else
            throw "ID is Incorrect";
    }
    get name() 
    {
        return this._name;
    }
    set name(name) 
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "NAME is Incorrect";
    }
    get salary() 
    {
        return this._salary;
    }
    set salary(salary) 
    {
        let salaryRegx = RegExp('^[1-9][0-9]*$');
        if (salaryRegx.test(salary))
            this._salary = salary;
        else
            throw " SALARY is Incorrect ";

    }
    get gender() 
    {
        return this._gender;
    }
    set gender(gender) 
    {
        let genderRegex = RegExp('^[F|M]$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else 
            throw " GENDER is Incorrect ";
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) 
    {
        if(startDate <= new Date())
            this._startDate = startDate;
        else
        throw " START DATE is Incorrect ";
    }

    toString() 
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ", Name = " + this.name + ", Gender = " + this.gender + ", Salary = " + this.salary + ", Start Date = " + employeeDate;
    }
}

try 
{
    let employeePayrollData = new EmployeePayrollData(1, "Jeff", 0, "M", new Date());
    console.log(employeePayrollData.toString());

    let teresaPayrollData = new EmployeePayrollData(2, "Teresa", 50000, "G", new Date());
    console.log(teresaPayrollData.toString());
}
catch (e) 
{
    console.error(e);
}