import React from "react"

export default function BannerMobile({children, noribbon, noribbonHeight =  524}) {
    return (
        <>
            <div className="banner-wrapper">
                {noribbon ? <img className="img-bg-noribbon" src="/images/contact-bg.jpg" /> : <img className="img-bg" src="/images/header-bg-sm.jpg" />}
                <div className="wrapper-content mid">
                    {children}
                </div>
                <img className="logo-img" src="/images/logo-sm.png" />
            </div >

            <style jsx>{`
                .banner-wrapper {
                    position: relative;
                    max-width: 380px;
                    margin-left: auto;
                    margin-right: auto;
                    height: 469px;
                }

                .wrapper-content {
                    max-width:270px;
                }

                img.about-bg {
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    margin-top: -79px;
                }
                
                .logo-img {
                    position: absolute;
                    top: 33px;
                    left: 41px;
                }
               
                .img-bg {
                    position:absolute;
                    width:384px;
                    height:524px;
                    z-index: -1;
                    top:0px;
                    left:0px;
                }
                .img-bg-noribbon {
                    position:absolute;
                    height:${noribbonHeight}px;
                    z-index: -1;
                    top:0px;
                    left:0px;
                }
             
            `}</style>
        </>

    )
}
