
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
       
        
        
        const response=await fetch('https://localhost:44374/api/Auth/login', {
            method: 'POST',  
            credentials:'include',
            headers: { 'Content-type': 'application/json' },                
            body: JSON.stringify({
                email,
                password
            })
        });
        //debugger;
        const content = await response.json();
        if(typeof content.isLogin === 'number')
        {
            props.setIdLogin(content);
            if(content)
            {
                navigate("/");
            }
        }
        else
        {
            alert("Email sau parola gresita!");
        }
        

        
       
}

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>

    );
};

export default Login;