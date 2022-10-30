import React from "react";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function TeacherView() {

  const navigate = useNavigate()

  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    fetch("/teacher_subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);


if (subjects.length === 0)
  return(
    <h1 className="text-center p-3 text-black text-xl font-bold"> You Currently Do not Teach any Subjects at Edupo School</h1>
  );

  return (
    <>
      <div>This will be the Teacher's view after Logging in</div>

    </>
  );
}

export default TeacherView;
