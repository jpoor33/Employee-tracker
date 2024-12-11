// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

let employeesArray = [];

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let keepGoing = true;

  while (keepGoing) { // Opening bracket for the while loop
    let firstName = prompt(`Please Enter Your First Name`);
    if (firstName === null) { // Check if user cancels
      keepGoing = false; // Exit the loop
      break; // Optional: break the loop immediately
    }

    let lastName = prompt(`Please Enter Your Last Name`);
    if (lastName === null) { // Check if user cancels
      keepGoing = false; // Exit the loop
      break; // Optional: break the loop immediately
    }

    let salary = prompt(`Please Enter Your Salary`);
    salary = Number(salary); //converting the string into a number so I can calculate the average
    if (salary === null) { // Check if user cancels
      keepGoing = false; // Exit the loop
      break; // Optional: break the loop immediately
    }
    
    if (confirm("Finish adding employees?")) {
      // If the user confirms they want to stop adding employees
      keepGoing = false; // Exit the loop
    }

    employeesArray.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }); 
  } 

  console.log(employeesArray);
  return employeesArray;  
}; 

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // First: Identify all the numbers in the employeesArray 
  function getSalaries(employeesArray) {
    const totalSalaries = []; // Initialize the array to hold salaries inside the function
    for (const employee of employeesArray) { // Loop through each employee object
      if (typeof employee.salary === 'number') { // Check if salary is a number
        totalSalaries.push(employee.salary); // Push salary to the totalSalaries array
      }
    }
    return totalSalaries; // Return the totalSalaries array
  }

  const totalSalaries = getSalaries(employeesArray); // Call getSalaries to get the salaries

  // Second: sum them
  let sum = 0;
  for (let i = 0; i < totalSalaries.length; i++) {
    sum += totalSalaries[i]; 
  }

  // Last: divide the sum by the number of employees
  let avgSalary = (sum / totalSalaries.length); // Calculate average 

  // Log the result
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalary}`);
};

displayAverageSalary(employeesArray); //call display average salary

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const employee = employeesArray; // use an array to list all employees 
  const randomIndex = Math.floor(Math.random() * employeesArray.length); //generate a random number
  const selectedPerson = employee[randomIndex]; //assign number and choose an employee
  console.log(`${selectedPerson.firstName} ${selectedPerson.lastName} is randomly selected with number ${randomIndex}`);
  
  return selectedPerson;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
