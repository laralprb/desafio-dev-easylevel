//com IF
function payRollAddAjustment(salary) {
  if (salary <= 1999.99) {
    return salary * 0.2 + salary;
  }
  if (salary < 3999.99) {
    return salary * 0.15 + salary;
  }
  if (salary < 6999.99) {
    return salary * 0.1 + salary;
  }
  return salary * 0.05 + salary;
}

payRollAddAjustment();

// //com Switch/case
// switch (salario) {
//   case salario <= 1999.99:
//     console.log(salario * 0.2 + salario);
//   case salario < 3999.99:
//     console.log(salario * 0.15 + salario);
//   case salario < 6999.99:
//     console.log(salario * 0.1 + salario);
//   case salario >= 7000:
//     console.log(salario * 0.05 + salario);
// }
