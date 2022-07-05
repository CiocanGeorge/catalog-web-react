import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [clasa, setClasa] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        
        await fetch('https://localhost:44374/api/Auth/register', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                lastName,
                clasa
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                navigate("/login");
            },
                (error) => {
                    alert(error);
                });
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>


                {/* for login*/}
                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                {/* for user info*/}
                <input type="text" className="form-control" placeholder="Name" required
                    onChange={e => setName(e.target.value)}
                />

                <input type="text" className="form-control" placeholder="Last Name" required
                    onChange={e => setLastName(e.target.value)}
                />

                <input type="text" className="form-control" placeholder="Class" required
                    onChange={e => setClasa(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Register;