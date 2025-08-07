export default function formatSalary(number) {
    const formattedSalary = number.toLocaleString('en-US');
    return formattedSalary;
}

console.log(formatSalary(1234567.89));