export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(({ location }) => location === city)
    .map((student) => {
      const checkGrades = newGrades
        .find(({ studentId }) => studentId === student.id);

      const updatedStudent = { ...student };

      if (checkGrades) {
        updatedStudent.grade = checkGrades.grade;
      } else {
        updatedStudent.grade = 'N/A';
      }

      return updatedStudent;
    });
}
