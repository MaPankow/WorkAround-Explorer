import { getDataByRole, getDataByCompany } from "./salaryData.js";
import salaryData from "./salaryData.js";

// The getDataByRole function takes a role parameter, which matches the role selected by user through radio button 
const getAverageSalaryByRole = role => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
}


// The getDataByCompany function takes company selected by user as parameter
const getAverageSalaryByCompany = company => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
}

// Selected company is used again as parameter to get all roles at that company. 
// Iterate through roles to find where the entry of the role matches the user’s selected role
const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany.salary;
}

// Replace former empty array with salaryData
const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map(obj => obj.salary);
  return calculateAverage(allSalaries);
}


// Helper Function. Do not edit.
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach(number => total += number);
  return (total / arrayOfNumbers.length).toFixed(2);
}

export { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary };