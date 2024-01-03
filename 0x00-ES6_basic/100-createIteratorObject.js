export default function createIteratorObject(report) {
  const employeesList = report.allEmployees;
  const allEmployees = [];
  for (const department in employeesList) {
    if (employeesList[department]) {
      allEmployees.push(...employeesList[department]);
    }
  }
  return allEmployees;
}
