import React, { useEffect, useState } from 'react';

const ClassDropDown = () => {

    const [classDisplay, setClassDisplay] = useState([])


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

    const displayClass = () => {
        return (
            <select id="test" className="form-select" aria-label="Default select example" defaultValue="0" >
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
       </div>
    );
}

export default ClassDropDown;