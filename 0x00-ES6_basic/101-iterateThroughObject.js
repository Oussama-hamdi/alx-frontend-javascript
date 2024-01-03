export default function iterateThroughObject(reportWithIterator) {
  const employeesArr = [];

  for (const report of reportWithIterator) {
    employeesArr.push(report);
  }

  return employeesArr.join(' | ');
}
