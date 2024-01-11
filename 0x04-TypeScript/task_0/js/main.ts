export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'ayoub',
  lastName: 'yew',
  age: 25,
  location: 'Tanger',
};

const student2 = {
  firstName: 'omar',
  lastName: 'yew',
  age: 21,
  location: 'Chi Blasa',
};
const studentsList: Array<Student> = [student1, student2];


const table: HTMLTableElement = document.createElement('table');
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);
