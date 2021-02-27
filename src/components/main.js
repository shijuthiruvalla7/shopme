import React from 'react'
import '../components_styles/main.css'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
export default function Main() {
    return (
        <div className="main">
            <div className="h-auto w-auto position-relative">
                <img src={photo1} alt="photo1" className="img-fluid"/>
                <p className="h2 position-absolute">Get New Fashions</p>
            </div>
            <div className="row mt-2">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6">
                    <img src={photo2} alt="photo1" className="img-fluid img-round"/>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6">
                    <img src={photo3} alt="photo1" className="img-fluid"/>
                </div>
            </div>

        </div>
    )
}
