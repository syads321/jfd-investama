import React from "react"

export default function BannerMobile({ children, noribbon, noribbonHeight = 524 }) {
    return (
        <>
            <div className="ribbon-wrapper">
                <div className="banner-wrapper">
                    <img className="img-bg-noribbon" src="/images/contact-bg.jpg" />
                    <div className="wrapper-mobile content mid">
                        {children}
                    </div>
                    <img className="logo-img" src="/images/logo-sm.png" />
                </div >
                {!noribbon ? <img className="img-bg-ribbon" src="/images/ribbon.png" /> : null}
            </div>


            <style jsx>{`
                .ribbon-wrapper {
                    position:relative;
                }
                .img-bg-ribbon {
                    position: absolute;
                    bottom: -36px;
                    right: 0px;
                    width: 136px;
                }
                .banner-wrapper {
                    position: relative;
                    margin-left: auto;
                    margin-right: auto;
                    height: 469px;
                    overflow:hidden;
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
                    width:100%;
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
