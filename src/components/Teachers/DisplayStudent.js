import React, { useEffect, useState } from 'react';

const DisplayStudent = (props) => {





    return (
        <div>
           <p>{props.classId}</p>
           <p>{props.isAbsence?"Absente":""}</p>
           <p>{props.isGrade?"Note":""}</p>
        </div>
    );
}


export default DisplayStudent;