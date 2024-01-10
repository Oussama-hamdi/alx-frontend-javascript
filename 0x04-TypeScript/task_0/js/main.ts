interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Oussama',
  lastName: 'Hamdi',
  age: 25,
  location: 'Tunisia'
};

const student2: Student = {
  firstName: 'Wess',
  lastName: 'Bouali',
  age: 27,
  location: 'Japan'
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement('table');

  students.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    })

  document.body.appendChild(table);
}

renderTable(studentsList);
