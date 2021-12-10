//com IF
function payRollAddAdjustment(salary) {
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

payRollAddAdjustment();
module.exports = { payRollAddAdjustment };
