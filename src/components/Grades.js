import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

const Courses = (props) => {
    const [grades, setGrades] = useState([]);
    const [absence, setAbsence] = useState([]);

    useEffect(() => {
        ( 
            async () => {
                const response = await fetch("https://localhost:44374/api/UserInfo/getGradeForUserByCours?idUser=" + props.idLogin + "&idCours=" + props.coursIdSelect, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                });

                const content = await response.json();
                setGrades(content);
            }
        )();
    }, [props.coursIdSelect, props.idLogin]);

    useEffect(() => {

        (
            async () => {
                const response = await fetch("https://localhost:44374/api/UserInfo/getAbsenceForUserByCours?idUser=" + props.idLogin + "&idCours=" + props.coursIdSelect, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                });

                const content = await response.json();
                setAbsence(content);
                
            }
        )();
    }, [props.coursIdSelect, props.idLogin]);

    const IsGrade = () => {
        if (grades) {
            return (

                grades.map((option) => (
                    <tr>
                        <td><Moment format='D MMM YYYY'>{option.Date}</Moment></td>
                        <td>{option.GradeUser}</td>
                    </tr>
                ))
            );
        }
    }

    const AbsenceDisplay = () => {
        if (absence) {
            return (

                absence.map((option) => (
                    <tr > 
                        <td colSpan="2"><Moment format='D MMM YYYY'>{option.Date}</Moment></td>
                    </tr>
                ))
            );
        }
    }



    const displayGrades = () => {

        return (
            <div>
                <br />
                <table className='tableGrades'>
                    <thead>
                        <tr>
                            <th colSpan="2">{props.coursNameSelect}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Data</th>
                            <th>Nota</th>
                        </tr>

                        <IsGrade />

                        <tr>
                            <th colSpan="2">Data Absent</th>
                        </tr>
                            <AbsenceDisplay />
                    </tbody>
                </table>
            </div>
        )

    }



    return (
        <div >
            {
                displayGrades()
            }

        </div>
    );


}



export default Courses;