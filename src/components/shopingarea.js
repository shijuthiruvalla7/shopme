import React from 'react'
import '../components_styles/shoppingarea.css'
import Card from './card'

export default function Shopingarea() {
    return (
        <div className="pb-5 pt-5 main-div">
            <div className="row m-0 row-main">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
            </div>

            <div className="row m-0 row-main">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
            </div>

            <div className="row m-0 row-main">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xs-3 py-4">
                    <Card/>
                </div>
            </div>
        </div>
    )
}
