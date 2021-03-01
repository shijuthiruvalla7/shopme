import React from 'react'
import '../components_styles/main.css'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.jpg'
import photo6 from '../images/photo6.jpg'
import photo7 from '../images/photo7.jpg'
import photo8 from '../images/photo8.jpg'
export default function Main() {
    return (
        <div className="main">
            <div className="h-auto w-auto ">
                <img src={photo1} alt="photo1" className="img-fluid" />
                <p className="h2 position-absolute offer-tag">Season End Sale <br/> <span style={{color:"#E31B23"}}>Get 60% Off</span> </p>
            </div>
            
            <div className="row no-gutters m-2">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6 pr-1">
                    <a href="#"><img src={photo2} alt="photo1" className="img-fluid image-option"/></a>
                    <a href="#"><p className="h3 position-absolute cat-name">Laptops</p></a>

                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6 pl-1">
                    <a href="#"><img src={photo3} alt="photo1" className="img-fluid image-option"/></a>
                    <a href="#"><p className="h3 position-absolute cat-name">Desktops</p></a>
                </div>
            </div>

            <div className="row no-gutters m-2">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6 pr-1">
                    <a href="#"><img src={photo4} alt="photo1" className="img-fluid image-option"/></a>
                    <a href="#"><p className="h3 position-absolute cat-name">Gaming</p></a>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6 pl-1">
                    <a href="#"><img src={photo5} alt="photo1" className="img-fluid image-option"/></a>
                    <a href="#"><p className="h3 position-absolute cat-name">Sports</p></a>
                </div>
            </div>

            <div className="row no-gutters m-2">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6 pr-1">
                    <a href="#"><img src={photo6} alt="photo1" className="img-fluid image-option"/></a>
                    <a href="#"><p className="h3 position-absolute cat-name">Cosmetics</p></a>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xs-6 pl-1">
                    <a href="#"><img src={photo7} alt="photo1" className="img-fluid image-option"/></a>
                    <a href="#"><p className="h3 position-absolute cat-name">Fashion</p></a>
                </div>
            </div>

        </div>
    )
}
