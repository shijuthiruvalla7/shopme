
import '../components_styles/navbar.css';
import React from 'react'


export default function Navbar() {
    return (
        <div className="p-0 m-0 position-absolute" style={{width:"100%"}}>
            <div className="row p-0 m-0 feedbackrow">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 feedbackcol" >
                    <p className="h1 m-0 feedbackrowp1">STAY WITH US</p>
                    <p className="h6 m-0 feedbackrowp2">Sign up and stay up to date on all the latest news from Topo Designs and best of all</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 feedbackcol">
                    <input type="email" placeholder="email" className="form-control emailinput"/>
                    <button className="btn button_email" type="submit"  >Submit</button>
                </div>
            </div>


            <div className="row p-0 m-0 footerrow position-absolute" >
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 footercol" >
                    <ul>
                        <li className="h3">Shop</li>
                        <li className="h6">New</li>
                        <li className="h6">Trending</li>
                        <li className="h6">Electronics</li>
                        <li className="h6">Home Appliances</li>
                        <li className="h6">Gaming</li>
                        <li className="h6">Professional</li>
                    </ul>

                    <ul className="list2">
                        <li className="h3">Help</li>
                        <li className="h6">Return</li>
                        <li className="h6">FAQ</li>
                        <li className="h6">Privacy And Policy</li>
                        <li className="h6">Contact Us</li>
                        <li className="h6">Become a Seller</li>
                        <li className="h6">Feedback</li>
                    </ul>
                </div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 copyright_div">
                        <p className="h6">All rights are reserved @2021 by Shiju S</p>
                        <p className="h6" style={{marginLeft:"auto"}}>Designed and Developed by Shiju S</p>
                    </div>
            </div>

        </div>
    )
}
