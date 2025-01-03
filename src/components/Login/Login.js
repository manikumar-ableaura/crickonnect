import React from "react";
import Header from "../Header";
import "./Login.css";

function Login() {

    return (
        <><Header />


            <main className=" layout-main-container">

                <div className="div1">
                    <div className="div2">
                        <h1>Login or Create Your Account</h1>
                        <div className="div3">
                            <label class="labeltxt">Email / Mobile Number</label>
                            <input type="text" placeholder="Email or Phone" value=""></input>
                        </div>
                        <div className="div4">
                            <label class="labeltxt">Password</label>
                            <input type="Password" placeholder="Password" value=""></input>
                        </div>
                        <a>Forgot Password</a>

                        <button>Login</button>

                        <p>Don't have an account? <a href="/signup/">Sign-up</a></p>

                    </div>
                </div>


            </main>

        </>

    )
}

export default Login