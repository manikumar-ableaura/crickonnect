import React from "react";
import { useNavigate } from "react-router-dom";

function OopsPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        alert("Redirecting to login...");
        navigate("/");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>OOPS!</h1>
            <p>You are not logged in. Please log in to continue.</p>
            <button 
                style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}

export default OopsPage;
