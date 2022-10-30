import React from "react";
import { useState, useEffect } from "react";

function StudentAdd() {
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
  const [classroom_id, setClassroomID] = useState(1)

  // const [students, setStudents] = useState([])

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
      }
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-neutral-200">
        <h1 className="text-center p-3 text-black text-2xl font-bold">
          ADD A NEW STUDENT
        </h1>

        <div className="flex flex-col w-1/2 gap-8 flex-wrap mx-auto edit-form">


          <fieldset className="flex flex-col ">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="text-black mt-2 p-1 rounded-sm"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="image">Image</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col ">
            <label htmlFor="Parent_id">Parent Id</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="number"
              name="parent_id"
              value={parent_id}
              onChange={(e) => setParentID(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="phone_no">Phone Number</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="phone_no"
              type="number"
              value={phone_no}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </fieldset>


          <fieldset className="flex flex-col">
            <label htmlFor="Admission Number">Admission Number</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="admission_no"
              type="number"
              value={admission_no}
              onChange={(e) => setAdmissionNo(e.target.value)}
            />
          </fieldset>


          <fieldset className="flex flex-col">
            <label htmlFor="subject_id">Subject ID</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="subject_id"
              type="number"
              value={subject_id}
              onChange={(e) => setSubjectID(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="full_name">Full Names</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="full_name"
              type="text"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="classroom_id">Classroom</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="classroom"
              type="number"
              value={classroom_id}
              onChange={(e) => setClassroomID(e.target.value)}
            />
          </fieldset>

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

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 my-6 w-2/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default StudentAdd;
