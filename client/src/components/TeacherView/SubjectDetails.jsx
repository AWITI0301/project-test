import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/user";
// import SyllabusForm from '../../components/TeacherView/SyllabusForm';
import DeleteConfirmation from '../../components/TeacherView/DeleteConfirmation';
function SubjectDetails({  }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [course, setCourse] = useState([])
    const [show, setShow] = useState(false)
    const history = useNavigate();
    const { id } = useParams();
    // const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`/subjects/${id}`)
        .then((r) => r.json())
        .then(subject => {
        setCourse(subject);
        setIsLoaded(true)
    })
    }, [id])

    if (!isLoaded) return <h2>Loading...</h2>

    function handleDeleteSubject() {

        fetch(`/subjects/${id}`, {
            method:'DELETE'
          })
 
        history.push(`/teacher/${subject.teacher.id}/subjects`);
        window.location.reload();
    }
    function handleToggle() {
        setShow(!show)
    }
    return (
        <div className='min-h-screen bg-slate-200 pt-10'>

            <h1 className='text-3xl font-bold my-4 pl-5 underline underline-offset-8'>{subject.title} ({subject.code})</h1>

            <div className='pl-6 text-base font-bold ml-4'>
                {subject.syllabus ?             
                
                    <p className='my-8'>
                        <NavLink to={`/syllabus/${subject.syllabus?.id}`}>
                            <span className='hover:text-blue-700 '>Syllabus</span>
                        </NavLink> 
                    </p>

                : 

                    user.teacher ?
                    <>
                        <h2 className='my-8'>Begin building your course by adding a description for your class.</h2> 
                        <SyllabusForm subject={subject} setSubject={setSubject}/>
                    </>

                    :

                    <p className='my-8'>Your professor  hasn't posted a syllabus yet!</p>
                    
                
                }

                <p className='my-8'>
                    <NavLink to={`/subject/${id}/assignments`}>
                        <span className='hover:text-blue-700'>Assignments</span>
                    </NavLink>
                </p>

                <p className='my-8'>
                    <NavLink to={`/subject/${id}/assessments`}>
                        <span className='hover:text-blue-700'>Assessments</span>
                    </NavLink>
                </p>

                <p className='my-8'>
                    <NavLink to={`/subject/${id}/classrooms`}>
                        <span className='hover:text-blue-700'>Classrooms</span>
                    </NavLink>
                </p>

                <p className='my-8'>
                    <NavLink to={`/subject/${id}/documents`}>
                        <span className='hover:text-blue-700'>Subject Documents</span>
                    </NavLink>
                </p>
                

                {user?.teacher ? 
                    <>
                    
                    <p className='my-8'>
                        <NavLink to={`/subject/${id}/students`}>
                            <span className='hover:text-blue-700'>Students</span>
                        </NavLink>
                    </p>

                    </>

                :

                    <p className='my-8'>
                    <NavLink to={`/subject/${id}/grades`}>
                        <span className='hover:text-blue-700'>Grades</span>
                    </NavLink>
                    </p>
                }
            </div>

                {user?. teacher ?

                
                    <button onClick={handleToggle} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5">Delete Subject</button>
                    
                    :

                    ""


                }

            <div className={show ? "show" : "hide"}>
                <DeleteConfirmation handleToggle={handleToggle} handleDelete={handleDeleteSubject} show={show} item="Subject"/>
            </div>

        </div>
    )
  }

















export default SubjectDetails