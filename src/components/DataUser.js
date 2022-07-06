import React, { useEffect, useState } from 'react';
import Courses from './Courses';
import ClassDropDown from './Teachers/ClassDropDown';

const DataUser = (props) => {
    const [nameUser, setNameUser] = useState('');
    const [lastNameUser, setLastNameUser] = useState('');
    const [classUser, setClassUser] = useState('');
    //din baza de date 1-2-3-4
    const [rolesUser, setRolesUser] = useState('');
    //in functie de rol din baza de date 1-elev 2-profesor matematica
    const [rolesUserDisplay, setRolesUserDisplay] = useState('');
    const [emailUser, setEmailUser] = useState('');


    const rol = () => {
        if (rolesUser === 1) {
            setRolesUserDisplay("Elev");
           
        }
        if(rolesUser === 2)
        {
            setRolesUserDisplay("Profesor de Matematica");
        }
    }


    const displayByRole=()=>{
        if(rolesUserDisplay==="Elev")
        {
            return (
                <Courses idLogin={props.idLogin} />
            );
        }
        if(rolesUserDisplay==="Profesor de Matematica")
        {
            return(
                <ClassDropDown />
            );
        }
    }


    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://localhost:44374/api/UserInfo/getInfouser?id=' + props.idLogin, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                });
                //verifica daca exista cineva logat 
                //true afiseaza
                //false return login page
                //debugger;
                const content = await response.json();
                setNameUser(content.Name)
                setLastNameUser(content.LastName)
                setClassUser(content.Class)
                setRolesUser(content.Roles)
                rol();
                setEmailUser(content.Email)
            }
        )();
    });

   
   



    return (
        <div >
            <table className='tableUser'>
                <tbody>
                    <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Email</th>
                        <th>Clasa</th>
                        <th>Rol</th>
                    </tr>
                    <tr>
                        <td>{nameUser}</td>
                        <td>{lastNameUser}</td>
                        <td>{emailUser}</td>
                        <td>{classUser}</td>
                        <td>{rolesUserDisplay}</td>
                    </tr>
                </tbody>
            </table>

            <p>Butoane cu materiile si cand apasa pe materie randeaza sub tabel (unu pentru note unu pentru absente ??) cu note si absente </p>

            <p>Se populeaza select-ul din baza de date </p>

           {
            displayByRole()
           }
            
            {/*
            <form >
                <div className="d-inline-flex p-1">
                    <label for="nameUser" className="form-label">Nume </label>
                    <input type="text" class="form-control" value={nameUser} readOnly />
                </div>

                <br/>

                <div className="d-inline-flex p-1">
                    <label for="lastNameUser" className="form-label">Prenume</label>
                    <input type="text" className="form-control" value={lastNameUser} readOnly/>
                </div>

                <br/>

                <div className="d-inline-flex p-1">
                    <label for="emailUser" className="form-label">Email</label>
                    <input type="text" className="form-control" value={emailUser} readOnly/>
                </div>

                <br/>

                <div className="d-inline-flex p-1">
                    <label for="classUser" className="form-label">Clasa</label>
                    <input type="text" className="form-control" value={classUser} readOnly/>
                </div>

                <br/>

                <div className="d-inline-flex p-1">
                    <label for="ruleUser" className="form-label">Rol</label>
                    <input type="text" className="form-control" value={rolesUserDisplay} readOnly/>
                </div>

                <br/>
            </form>
            */}


        </div>
    );
};

export default DataUser;