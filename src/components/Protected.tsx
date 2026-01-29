import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Protected = () => {
    const { auth } = useAuth();
    const context = useOutletContext();
    const token = localStorage.getItem("token");

    console.log("Protected - auth:", auth, "token:", token);
    return (auth && token) ? <Outlet context={context}/> : <Navigate to="/login" />;
};

export default Protected;
