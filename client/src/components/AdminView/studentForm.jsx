import {
  Button,
  Container,
  FormLabel,
  Input,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import {
  Dashboard,
  Delete,
  Edit,
  Save,
  Send,
  ViewAgenda,
} from "@material-ui/icons";
// import { borderRadius } from "@mui/system";
import React, { useState } from "react";
// import StudentData from "../../Views /StudentData";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "black",
  },
  container: {
    paddingTop: theme.spacing(3),
  },
}));
function StudentForm() {
  const [errors, setErrors] = useState([]);
  const [role, setRole] = useState("student");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [parent_id, setParentID] = useState("2");
  const [phone_no, setPhoneNumber] = useState("");
  const [admission_no, setAdmissionNo] = useState("");
  const [subject_id, setSubjectID] = useState(1);
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classroom_id, setClassroomID] = useState(1);
  const [username, setUserName] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role,
        gender,
        image,
        parent_id,
        phone_no,
        admission_no,
        subject_id,
        full_name,
        email,
        password,
        classroom_id,
        username
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          // setStudents([...products, data]);
          console.log(data);
          // navigate("/manage_products");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
        console.log(err);
      }
    });
  }
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        {/* // BUTTONS */}
        {/* <Button variant="outlined" color="secondary"size="large" startIcon={<Delete/>}>Delete</Button>
    <Button variant="outlined" color="secondary"  size="large" startIcon={<Send />}>Submit</Button>
    <Button variant="outlined"  size="large" startIcon={<Edit />}className ={classes.button}>Edit</Button>
    <Button variant="outlined" color="secondary" size="large" startIcon={<Dashboard/>}>Dashboard</Button>
    <Button variant="outlined" color="secondary" size="large" startIcon={<Save/>}>Save</Button> */}
        <h1 style={{ alignText: "center" }}>STUDENT FORM</h1>
        <form
          className={classes.form}
          autoComplete="off"
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "30px",
            alignText: "center",
            width: "500px",
            marginTop: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <div className={classes.item}>



            <FormLabel id="demo-radio-buttons-group-label">Gender:</FormLabel>
            <br></br>
            {/* GENDER */}
            {/* <div class="form-check"> */}
              <input
                class="form-check-input"
                type="radio"
                id="true"
                name="gender"
                value={true}
                onChange={(e) => setGender(e.target.value)}
              />
              <label class="form-check-label" for="true">
                Male
              </label>
              <input
                class="form-check-input"
                type="radio"
                id="false"
                name="gender"
                value={false}
                onChange={(e) => setGender(e.target.value)}
              />
              <label class="form-check-label" for="false">
                {" "}
                Female
              </label>
            {/* </div> */}
          </div>
          {/* IMAGE */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">Image:</FormLabel>
            <TextField
              id="outlined-basic1"
              variant="outlined"
              label="Enter image url"
              size="small"
              style={{ width: "100%" }}
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          {/* PARENT ID */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              Parent ID:
            </FormLabel>
            <TextField
              id="outlined-basic2"
              variant="outlined"
              label="Enter Parent id"
              size="small"
              style={{ width: "100%" }}
              value={parent_id}
              onChange={(e) => setParentID(e.target.value)}
            />
          </div>
          {/* PHONE NO */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              Phone Number:
            </FormLabel>
            <TextField
              id="outlined-basic3"
              variant="outlined"
              label="Enter Phone number"
              size="small"
              style={{ width: "100%" }}
              value={phone_no}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* ADDMISSION NO */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              Admission Number:
            </FormLabel>
            <TextField
              id="outlined-basic4"
              variant="outlined"
              label="Enter Admission number"
              size="small"
              style={{ width: "100%" }}
              value={admission_no}
              onChange={(e) => setAdmissionNo(e.target.value)}
            />
          </div>
          {/* SUBJECT ID */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              Subject ID:
            </FormLabel>
            <TextField
              id="outlined-basic5"
              variant="outlined"
              label="Enter Subject ID"
              size="small"
              style={{ width: "100%" }}
              value={subject_id}
              onChange={(e) => setSubjectID(e.target.value)}
            />
          </div>
          {/* FULL NAME */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              Full Name:
            </FormLabel>
            <TextField
              id="outlined-basic6"
              variant="outlined"
              label="Enter Name"
              size="small"
              style={{ width: "100%" }}
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          {/* EMAIL */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">Email:</FormLabel>
            <TextField
              id="outlined-basic7"
              variant="outlined"
              label="Enter email address"
              size="small"
              style={{ width: "100%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* PASSWORD */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">Password:</FormLabel>
            <TextField
              id="outlined-basic8"
              variant="outlined"
              label="Enter password"
              size="small"
              style={{ width: "100%" }}
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* CLASSROOMID */}
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              Classrooom ID:
            </FormLabel>
            <TextField
              id="outlined-basic9"
              variant="outlined"
              label="Enter classroom id"
              size="small"
              style={{ width: "100%" }}
              value={classroom_id}
              onChange={(e) => setClassroomID(e.target.value)}
            />
          </div>
          <div className={classes.item}>
            <FormLabel id="demo-radio-buttons-group-label">
              UserName
            </FormLabel>
            <TextField
              id="outlined-basic9"
              variant="outlined"
              label="Enter student's username"
              size="small"
              style={{ width: "100%" }}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          {/* ERRORS */}
          {errors.map((error) => {
            return (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            );
          })}
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                width: "400px",
                marginTop: "15px",
                alignItems: "center",
              }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
export default StudentForm;
