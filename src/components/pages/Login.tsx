import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {auth, setAuth} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

        const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            // const response = await login(username, password);

            // Store token in localStorage
            // localStorage.setItem("token", response.token);

            // Update auth state
            setAuth(true);

            // Redirect to homepage
            navigate('/');
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
            console.error("Login error:", err);
        }
    };

    return(
        <>
        <main>
            <div className="login_header">
                <Header />
                <h1>Login Page</h1>
            </div>
            <form className="login_form" onSubmit={handleSubmit}>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <label className="username_label" htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="username_input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                    required
                />
                <label className="password_label" htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="password_input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login_button">Login</button>
            </form>
        </main>
        <Footer />
        </>
    );
}

export default Login;
