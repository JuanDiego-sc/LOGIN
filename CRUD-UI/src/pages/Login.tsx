import { useEffect, useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState<string | null>(null);
    const auth = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await auth.login(email, password);
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            if (auth.role === "admin") {
                setRedirect("/adminPannel");
            } else if (auth.role === "user") {
                setRedirect("/dashboard");
            }
        }
    }, [auth.isAuthenticated, auth.role]);

    if (redirect) {
        return <Navigate to={redirect} replace />;
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleLogin}>
                <h1>Login</h1>

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button type="submit">Login</button>
            </form>
        </DefaultLayout>
    );
}