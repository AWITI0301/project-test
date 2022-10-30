import React, { useState } from "react";
import "./LoginForm.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleAdminSubmit(e) {
    e.preventDefault();
    fetch("/admin_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/admin");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleTeacherSubmit(e) {
    e.preventDefault();
    fetch("/teacher_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/teacher");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleStudentSubmit(e){
    e.preventDefault();
    fetch("/student_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/student");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  function handleParentSubmit(e){
    e.preventDefault();
    fetch("/parent_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/parent");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="form-container">
      <h1 className="text-center p-6 text-4xl font-medium">LOGIN</h1>
      <form className=" w-2/3 my-6 mx-auto flex flex-col">
        <label htmlFor="username" className="text-l">
          UserName:
        </label>
        <input
          required
          className=" mt-2 h-8 rounded-lg"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="mt-5 text-xl">
          Password:
        </label>
        <input
          className="mt-2 h-8 rounded-lg"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
        <h2 className="text-center mt-6 py-6 text-xl ">Log in as:</h2>

        <div className="flex gap-4 flex-wrap">
          <button
            type="submit"
            onClick={handleAdminSubmit}
            className="bg-[#1C1AB1] hover:bg-blue-700 mt-2 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Admin
          </button>
          <button
            type="submit"
            onClick={handleTeacherSubmit}
            className="bg-[#1C1AB1] hover:bg-blue-700 mt-2 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Teacher
          </button>
          <button
            type="submit"
            onClick={handleStudentSubmit}
            className="bg-[#1C1AB1] hover:bg-blue-700 mt-2 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Student
          </button>{" "}
          <button
            type="submit"
            onClick={handleParentSubmit}
            className="bg-[#1C1AB1] hover:bg-blue-700 mt-2 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Parent
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
