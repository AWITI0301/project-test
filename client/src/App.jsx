import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AdminView from "./components/AdminView/AdminView";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import ParentView from "./components/ParentView/ParentView";
import StudentView from "./components/StudentView/StudentView";
import TeacherView from "./components/TeacherView/TeacherView";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/admin_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/teacher_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/student_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/parent_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <main className="min-h-[92vh]">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherView />} />
          <Route path="/student" element={<StudentView />} />
          <Route path="/parent" element={<ParentView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
