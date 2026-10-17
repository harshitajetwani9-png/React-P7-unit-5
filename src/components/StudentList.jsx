import { useState, useEffect } from "react";
const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);
  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <p key={student.id}>
          {student.name} - {student.email}
        </p>
      ))}
    </div>
  );
};
export default StudentList;