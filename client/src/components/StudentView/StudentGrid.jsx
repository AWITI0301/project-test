import React from 'react'
import StudentDetails from './StudentDetails'

const StudentGrid = ( {students, isLoading}) => {
  return isLoading ? (
       <h1>Loading...</h1> 
       ) : (
    <section className='cards'>
    {students.map((student) => (
        <StudentDetails key={student.student_id} student={student}></StudentDetails>
    ))}


  </section>
       )
}

export default StudentGrid