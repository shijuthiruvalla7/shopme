import React from 'react'
import Tilt from 'react-tilt'
import "../components_styles/card.css"
import iphone from '../images/iphone.png'
export default function card() {
    return (
        <Tilt className="Tilt" options={{max:35,easing:"cubic-bezier(.03,.98,.52,.99)"}} >
            <div className="main ">
                <div className="row first-row d-flex">
                        <div className="image-div" style={{display:"flex",justifyContent:"center"}}>
                            <img src={iphone} alt="iphone12" className="logo-image"/>
                        </div>
                </div>

                <div className="row second-div d-flex">
                        <p className="h6">Iphone 12</p>
                        <p className="h4">₹69999</p>

                        <button className="cart-button">Add To Cart</button>
                </div>
            </div>
        </Tilt>
        
    )
}
