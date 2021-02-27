import React,{useState} from 'react'
import '../components_styles/header.css'
import logo from '../images/logo.png'

export default function Header() {

    const[top,setTop]=useState("-10")


    return (
        <div className="postion-relative ">
            <div className="row red-row m-0 p-0">

            </div>
            <div className="search-bar position-absolute" style={{top:top}}>
                <form action="#" className="d-flex search-form">
                    <input className="search-input" type="text" placeholder="SEARCH HERE"/>
                    <input onClick={()=>{setTop("-10%")}} className="btn btn-search" type="submit" value="Search"/>
                </form>
            </div>
            
            <div className="row row-nav m-0">
                <a href="#"><img className="logo ml-4" src={logo} alt="logo.png"/></a>
                <li>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    TOP OFFERS
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                </li>
                <li>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    BEST PICKS
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                </li>

                <li>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ELECTRONICS
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                </li>

                <li>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MEN
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                </li>

                <li>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    WOMEN
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                </li>
                <a onClick={()=>{setTop("0%")}} className="search-icn" href="#"><box-icon name='search-alt'  ></box-icon></a>
                <a  className="cart-icn" href="#"><box-icon name='cart-alt'></box-icon></a>
                <a  href="#"><p className="h6 ml-3 mb-0 text-muted">Join/Register</p></a>
            </div>
            

        </div>
    )
}





