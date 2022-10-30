import { NavLink, useParams } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../../context/user";
import { CourseContext } from "../../context/subject";
import { useEffect, useState } from "react";
import CourseForm from '../../components/TeacherView/SubjectForm'

function SubjectList( ){
    const { user } = useContext(UserContext)
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext)
    const [subjects, setSubjects] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [show, setShow] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        fetch(`/teachers/${id}/subjects`)
        .then((r) => r.json())
        .then(subjects => {
        setSubjects(subjects);
        setIsLoaded(true)
    })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>

    function toggleShowForm(){
        setShow(!show)
    }

    return (
        <div className='min-h-screen bg-slate-200 text-center pt-20'>

            <h1 className='text-4xl font-bold my-8'>Welcome, {user?.first_name}</h1>

            <h2 className='text-2xl font-bold my-8'>Your subjects</h2>

            {subjects?.map(subject => {
                return (
                    <p className='font-bold my-8'>
                        <NavLink to={`/subject/${subject.id}`} className="hover:text-blue-700" onClick={(e) => setCurrentSubject(subject)}>
                            <span> - {subject.title}</span>
                        </NavLink>
                        <span>, {subject.university}</span>
                        <span>, {subject.days}</span>
                        <span>, {subject.code}</span>
                    </p>

                    )} )
             }

            <button onClick={toggleShowForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a subject</button>
            
            <div className={show ? "show my-9" : "hide"}> 
                <SubjectForm setSubjects={setSubjects} subjects={subjects}/>
            </div>

         </div>
    )
}

export default SubjectList