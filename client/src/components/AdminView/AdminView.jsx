import { Grid } from '@material-ui/core'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Adminbar from './Adminbar';
import StudentAdd from './StudentAdd';
import StudentForm from './studentForm';


function AdminView() {
  return (
    <>
      <div>This will be the Admin's view after Logging in</div>
      {/* <Adminbar /> */}
      <StudentForm/>
    </>

  )
}

export default AdminView