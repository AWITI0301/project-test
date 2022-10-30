import React from 'react'

const StudentDetails = ({student}) => {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={student.img} alt='' />
        <h1>{student.full_name}</h1>
      </div>
      <div className='card-back'>
        <h2>{student.username}</h2>
        <ul>
          <li>
            <strong>Gender:</strong> {student.gender}
          </li>
          <li>
            <strong>Role:</strong> {student.role}
          </li>
          <li>
            <strong>Phone_no:</strong> {student.phone_no}
          </li>
        </ul>
      </div>
    </div>
  </div>
   
  )
}

export default StudentDetails