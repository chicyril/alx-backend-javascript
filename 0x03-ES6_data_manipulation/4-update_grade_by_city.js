export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradeMap = new Map(newGrades.map((gradeObj) => [gradeObj.studentId, gradeObj.grade]));
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradeMap.get(student.id) || 'N/A',
    }));
}
