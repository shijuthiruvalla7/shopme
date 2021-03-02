import React from 'react'
import "../components_styles/login.css"

export default function Login() {
    return (
            <div className="container pb-5">
                <div className="row position-relative ml-5 mr-5 d-flex text-row1">
                    <p className="h3">Sign Up</p>
                </div>
                <div className="row position-relative ml-5 mr-5 d-flex text-row2">
                    <p className="h5 create-info">Sign or Create a account to start earning instantly</p>
                </div>

                <div className="row position-relative ml-5 mr-5 mt-4 d-flex form-main-row">
                    <form action="" className="form-main">
                        <div className="form-group">
                            <label htmlFor="emailaddress">Email Address</label>
                            <input type="email" className="form-control" id="emailaddress" aria-describedby="emailaddressarea"/>
                            <small className="form-text text-muted" id="emailaddressarea"></small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" aria-describedby="passmessage"/>
                            <p className="h6 mt-2"><a style={{color:"#E31B23"}} href="#">Forget Password</a></p>
                            <small className="form-text text-muted" id="passmessage"></small>
                        </div>

                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="acceptagree"/>
                            <label htmlFor="" className="form-check-label terms-agree" htmlFor="acceptagree">Do you agree the terms and condition <span className="ml-5"><a href="#">Terms and Condition</a></span> </label>
                        </div>

                        <button type="submit" className="login-button">Login</button>
                        <button className="register-button mt-4">Create Account</button>
                        <button className="facebook-button mt-4">Facebook</button>
                        <button className="google-button mt-4">Google</button>

                    </form>

                    
                    


                </div>





            </div>

    )
}
