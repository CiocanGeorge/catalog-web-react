import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

const DisplayStudent = (props) => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://localhost:44374/api/UserInfo/getUserByClass?id=' + props.classId + "&cours=" + props.rolesUserDisplay, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                });

                const content = await response.json();
                setUsers(content);
                debugger;
            }
        )();
    }, [props.classId]);


    const absente = () => {
        return (
            <div>
                <p>Absente</p>
            </div>
        )
    }
    const note = () => {
        return (
            <div>
                <table className='tableUser'>
                    <tbody>
                        <tr>
                            <th>Nume</th>
                            <th>Prenume</th>
                            <th>Data/Note</th>
                            <th>Nota raspuns</th>
                        </tr>

                        {

                            users.map((option) => (
                                <tr>
                                    <td>{option.Name}</td>
                                    <td>{option.LastName}</td>
                                    <td>
                                        <Moment format='D MMM YYYY'>{option.Date}</Moment>
                                        <br />
                                        {option.Grade}
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        )
    }

    return (
        <div>
            <p>{props.classId}</p>
            <p>
                {
                    props.isAbsence ?
                        absente()
                        :
                        ""
                }
            </p>
            <p>
                {
                    props.isGrade ?
                        note()
                        :
                        ""
                }
            </p>
        </div>
    );
}


export default DisplayStudent;