import React, { useEffect, useState } from 'react';
import DisplayStudent from './DisplayStudent';

const ClassDropDown = (props) => {

    const [classDisplay, setClassDisplay] = useState([])
    const [classId, setClassId] = useState("0");
    const [isGrade,setIsGrade]=useState(false);
    const [isAbsence,setIsAbsence]=useState(false);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://localhost:44374/api/UserInfo/getClass', {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                });

                const content = await response.json();
                setClassDisplay(content);

            }
        )();
    });

    function selectClass() {
        const sel = document.getElementById("test");
        setClassId(sel.options[sel.selectedIndex].value);

    }

    const displayClass = () => {
        return (
            <select id="test" className="form-select" aria-label="Default select example" defaultValue="0" onChange={selectClass}>
                <option disabled value="0" >Choose Class...</option>
                {

                    classDisplay.map((option) => (
                        <option value={option} key={option} >{option}</option>
                    ))
                }
            </select >
        );
    }



    return (
        <div>
            {
                displayClass()
            }
            {
                classId !== "0"
                    ?
                    <div>
                        <br/>
                        <button type="button" class="btn btn-primary" onClick={()=>{setIsGrade(true);setIsAbsence(false)}}>Note</button>   
                        <button type="button" class="btn btn-primary" onClick={()=>{setIsGrade(false);setIsAbsence(true)}}>Prezenta</button>
                    </div>
                    :
                    ""
            }
            {
                <DisplayStudent classId={classId} isGrade={isGrade} isAbsence={isAbsence} rolesUserDisplay={props.rolesUserDisplay}/>
            }


        </div>
    );
}

export default ClassDropDown;