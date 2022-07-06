import React, { useEffect, useState} from 'react';

const ClassDropDown = () => {

    const [classDisplay,setClassDisplay]=useState([])
   
    
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
                const test=classDisplay;
                debugger;
                
            }
        )();
    });

  


    return(
        <select id="test" className="form-select" aria-label="Default select example" defaultValue="0" >
            <option disabled value="0" >Choose Class...</option>
            {

                    classDisplay.map((option) => (
                    <option >{option}</option>
                ))
            }


        </select>
    );
}

export default ClassDropDown;