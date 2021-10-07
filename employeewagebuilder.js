console.log("***Welcome To Employee Wage Builder Application***");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let totalEmployeeWage = 0;
let dayCounter = 0;
let employeeDailyWageArray = new Array();
let employeeDailyWageMap = new Map();
let employeeDailyHoursMap = new Map();

function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee works Part Time");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is ABSENT");
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
    employeeDailyHoursMap.set(totalWorkingDays, employeeHours);
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWage(employeeHours));
}

//Use Case - 7A
//Calculating Total Employee Wage Using ForEach
function totalWages(dailyWage) 
{
    totalEmployeeWage += dailyWage;
}
employeeDailyWageArray.forEach(totalWages);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nTotal Employee Wage = " + totalEmployeeWage);

//Calculating Total Employee Wage Using Reduce
function totalWageUsingReduce(totalWage, dailyWage) 
{
    return totalWage + dailyWage;
}
console.log("Employee Wage With Reduce : " + employeeDailyWageArray.reduce(totalWageUsingReduce, 0));

//Use Case - 7B
//Print day along with daily wage
function mapDayWithDailyWage(dailyWage) 
{
    dayCounter++;
    return "Day " + dayCounter + " = " + dailyWage;
}
let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithDailyWage);
console.log("Daily Wage Map : ");
console.log(mapDayWithWageArray);

//Use Case - 7C
//Show days when full time Wage of 160 is earned
function fullTimeWage(dailyWage) 
{
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned : ");
console.log(fullDayWageArray);

//Use Case - 7D
//Find first occurence when full time wage was eared using find function
function findFullTimeWage(dailyWage) 
{
    return dailyWage.includes("160");
}
console.log("First Full Time Wage was Earned on Day : " + mapDayWithWageArray.find(findFullTimeWage));

//Use Case - 7E
//Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) 
{
    return dailyWage.includes("160");
}
console.log("Check All Element Have Full Time Wage: " + fullDayWageArray.every(isAllFullTimeWage));

//Use Case - 7F
//Check if ther eis any Part Time Wages
function isAnyPartTimeWage(dailyWage) 
{
    return dailyWage.includes("80");
}
console.log("Check If Any Part Time Wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));

//Use Case - 7G
//Find Number of days the Employee Worked
function totalDaysWorked(numberOfDays, dailyWage) 
{
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("Number of Days the Employee has Worked = " + employeeDailyWageArray.reduce(totalDaysWorked, 0));

//Use Case - 8
console.log(employeeDailyWageMap);
console.log("Employee Wage Map : \nTotal Working Hours : " + Array.from(employeeDailyWageMap.values()).reduce(totalWageUsingReduce, 0));

//USe Case - 9
const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}
let count = 0;
let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
let totalWage = employeeDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Employee Wage Using Arrow Function : \nTotal Hours : " + totalHours + "\nTotal Employee Wage : " + totalWage);

let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
employeeDailyHoursMap.forEach((value, key) => {
    if(value == 8)
        fullTimeWorkingDays.push(key);
    else if(value == 4){
        partTimeWorkingDays.push(key);
    }
    else
        nonWorkingDays.push(key);
});

console.log("Full Working Days : " + fullTimeWorkingDays);
console.log("Part Working Days : " + partTimeWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);