import { useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    if(auth.isAuthenticated) {
        return <Navigate to="/dashboard"/>
    }
    
    return(
        <DefaultLayout>
              <form className="form">
                <h1>Login</h1>

                <label>Email</label>
                <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>

                <label>Password</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button>Login</button>
            </form>
        </DefaultLayout>
    )
}