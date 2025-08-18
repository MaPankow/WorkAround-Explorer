# WorkAround Explorer

This project is part of a JavaScript course on [Codecademy](https://www.codecademy.com). The initial code was provided by Codecademy and can be seen in my initial commit. The tasks focus on pacticing JavaScript imports and exports!

## Tasks as given by Codecademy:

The following list is a personal summary of the tasks given by Codecademy — rephrased in my own words to reflect what I understood and implemented during the project.

The tasks were originally presented in a clear and detailed step-by-step format and the descriptions below are based on that structure, but without any original wording or copyrighted task instructions.

"WorkAround" is the name of a fictional reserch organization. The research data is already given in salaryData.js. According to the choice of a role and a company, the app fetches specific data and displays it to the screen:

- The salary for the chosen role at the chosen company.
- The industry average for the chosen role.
- The average salary at the chosen company across all roles.
- The industry average salary across all roles and all companies.



###TODO
**[x] 1.** Exported four functions from `salaryData.js` as named exports, and exported the `salaryData` array as the default export.

**[x] 2.** Imported the functions `getRoles()` and `getCompanies()` into `main.js`.

**[x] 3.** Initialized the variables `companies` and `roles` with the respective function calls instead of using empty arrays.

**[x] 4.** Added the `type` attribute to the `<script src='main.js'>` tag in `index.html` to indicate that the script uses ES6 modules.

**[x] 5.** In `workAroundModule.js`, the functions initially returned placeholder values of `$0`. Imported `getDataByRole()`, `getDataByCompany()`, and `salaryData` to calculate real data.


**[x] 6.** Replaced placeholder arrays with correct logic to calculate the results using the imported functions.

**[x] 7.** Exported the four calculation functions from `workAroundModule.js`.

**[x] 8.** Imported those functions into `main.js`.

**[x] 9.** Replaced placeholder values in the `updateResults()` function with actual function calls to display the calculated results.


***Extra Challenge***

**[x] 10.** Formatted large numbers to improve readability, as in the provided example:

const result = formatNumber(1234567.89);
// result = "1,234,567.89"

Some hints/further instructions to the task:

- **[x]** Created a new module called utilities.js.
- **[x]** Defined the formatNumber() function to take a number and return a string with proper formatting.
- **[x]** Used this function in main.js to render formatted results to the screen.

## Setting up a local server to see the project in the browser
This project needs to run on a local server because ES6 modules must be loaded via http:// or https:// for security reasons. If the files are opened directly using the file:// protocol, most modern browsers will block module imports.

To solve this, I used the Live Server extension in VS Code, which starts a local development server and allows the page to load via localhost. This mimics a real web environment and enables module-based scripts to run correctly.
