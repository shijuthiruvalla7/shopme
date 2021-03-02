import React,{useState} from 'react'
import '../components_styles/header.css'
import logo from '../images/logo.png'

export default function Header() {

    const[top,setTop]=useState("-10")
    const[sidenav,setSideNav]=useState("-100%")


    return (
        <div className="postion-relative">
            <div className="row red-row m-0 p-0">

            </div>
            <div className="search-bar position-absolute" style={{top:top}}>
                <form action="#" className="d-flex search-form">
                    <input className="search-input" type="text" placeholder="SEARCH HERE"/>
                    <input onClick={()=>{setTop("-10%")}} className="btn btn-search" type="submit" value="Search"/>
                </form>
            </div>
            
            <div className="row row-nav m-0" style={{zIndex:"2"}}>
                <a href="#" onClick={()=>{setSideNav("0")}}><img className="logo ml-4" src={logo} alt="logo.png"/></a>
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
            <div className="side-nav-bar position-absolute" style={{left:sidenav}}>
                <div style={{height:"10vh",width:"100%",backgroundColor:"#E31B23",display:"flex",alignItems:"center"}}>
                        <span style={{marginRight:"2%",marginLeft:"auto"}}>
                        <a href="#" onClick={()=>{setSideNav("-100%")}}>
                        <box-icon name='arrow-back' color='#ffffff'></box-icon>
                        </a>
                        </span>

                </div>

                    <div id="main">

                        <div className="card">
                            <div className="card-header">
                                <a href="#collapsetopoffer" className="card-link" data-toggle="collapse">
                                    <p className="sidenav-header">Top Offers</p>
                                </a>
                            </div>

                            <div id="collapsetopoffer" className="collapse show" data-parent="#main">
                                <div className="class-card">
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#collapsebestpicks" className="collapsed card-link" data-toggle="collapse">
                                    <p className="sidenav-header">Best Picks</p>
                                </a>
                            </div>

                            <div id="collapsebestpicks" className="collapse show" data-parent="#main">
                                <div className="class-card">
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#collapseelectronics" className="collapsed card-link" data-toggle="collapse">
                                    <p className="sidenav-header">Electrtonics</p>
                                </a>
                            </div>

                            <div id="collapseelectronics" className="collapse show" data-parent="#main">
                                <div className="class-card">
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                </div>
                            </div>
                        </div>
                        

                        <div className="card">
                            <div className="card-header">
                                <a href="#collapsemen" className="collapsed card-link" data-toggle="collapse">
                                    <p className="sidenav-header">Electrtonics</p>
                                </a>
                            </div>

                            <div id="collapsemen" className="collapse show" data-parent="#main">
                                <div className="class-card">
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#collapsewomen" className="collapsed card-link" data-toggle="collapse">
                                    <p className="sidenav-header">Electrtonics</p>
                                </a>
                            </div>

                            <div id="collapsewomen" className="collapse show" data-parent="#main">
                                <div className="class-card">
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                    <p className="sidenav-body"><a onClick={()=>{setSideNav("-100%")}} href="#">Best Deal</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
    )
}





