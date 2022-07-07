import React, { useEffect, useState } from 'react';
import Grades from './Grades';


const Courses = (porps) => {

    const [responseCourses, setResponseCourses] = useState([]);
    const [coursNameSelect,setCoursNameSelect]=useState("");
    const [coursIdSelect,setCoursIdSelect]=useState(0);
    const [displayGrades,setDisplayGrades] =useState({
        display: 'none',
      });

    useEffect(() => {
        (
            async () => {
                const response = await fetch("https://localhost:44374/api/UserInfo/getCoursesByUserID?id=" + porps.idLogin, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                });

                const content = await response.json();


                setResponseCourses(content);
            }
        )();
    })

    function selectCourse() {
        const sel=document.getElementById("test");
        setCoursIdSelect(sel.options[sel.selectedIndex].value);
        setCoursNameSelect(sel.options[sel.selectedIndex].text);
        setDisplayGrades({
            display: 'contents',
          });
    }


    const Cour = () => {
        if (responseCourses.length > 0) {
            return (
                <div>
                    <select id="test" className="form-select" aria-label="Default select example" defaultValue="0" onChange={selectCourse}>
                        <option disabled value="0" >Choose...</option>
                        {

                            responseCourses.map((option) => (
                                <option value={option.ID} key={option.ID}>{option.CourseName}</option>
                            ))
                        }


                    </select>
                    <div className='Grades' style={displayGrades} >
                        <Grades coursNameSelect={coursNameSelect} coursIdSelect={coursIdSelect} idLogin={porps.idLogin}/>
                    </div>
                </div>
            )
        }
        else {
            return (
                <p><b>Nu sunteti inrolat la nici o materie.</b></p>
            )

        }
    }





    return (
        <div>
            {
                Cour()
            }

        </div>
    );

}

export default Courses;