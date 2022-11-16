import React from "react"
import { useRouter } from 'next/router';
export default function FooterMobile() {
    const router = useRouter();
    return (
        <>
            <div className="footer-mobile">
                <img className="bg-image" src="/images/bg-footer-mobile-1.png" />
                <img className="bg-image" src="/images/bg-footer-mobile-2.png" />
                <div className="wrapper-mobile">
                    <div className="image-footer-wrapper">
                        <img style={{width: 56}} src="/images/logo-sm.svg" />
                    </div>
                </div>
                {/* <img className="bg" src="/images/bg-footer.png" /> */}

                <div className="wrapper-mobile">
                    <div className="flex">
                        <img className="image-pin" src="/images/pin-point.png" />
                        <div className="address-pin">
                            <p className="txt-458">Virtual Office</p>
                            <p className="txt-264">Office 88</p>
                            <p className="txt-8108">
                                Jl. Casablanca Raya Kav. 88 Office 88 Lt. 9 Unit A Office 88, Kota
                                Casablanca, Kel. Menteng Dalam, Kec. Tebet, Jakarta Selatan, 12870.
                            </p>

                        </div>
                    </div>
                    <div className="flex">
                        <img className="image-carbon" src="/images/carbon_email.png" />
                        <div>
                            <p className="txt-405">support@jfd-investama.com</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-mobile">
                    <div className="flex footermenu">
                        <a href="/" className={`txt-953 ${router.pathname == "/" ? "active" : ""}`}>Home</a>
                        <a href="/about" className={`txt-953 ${router.pathname == "/about" ? "active" : ""}`}>Who We Are</a>
                        <a href="/whatwedo" className={`txt-953 ${router.pathname == "/whatwedo" ? "active" : ""}`}>What We Do</a>
                        <a href="/contact" className={`txt-953 ${router.pathname == "/contact" ? "active" : ""}`}>Contact</a>
                    </div>
                </div>
                <img className="footer-ribbon" src="/images/ribbon.png" /> 
            </div>
            <style jsx>{`
            .footer-mobile {
                position: relative;
                background: #0B2B40;
                overflow:hidden;
            }
            .footer-ribbon {
                position:absolute;
                width:100px;
                bottom:0px;
                right: -12px;
            }
            a.active {
                color: hsl(154deg 31% 52% / 86%) !important;
            }
            .footer-wrapper {
                width: 307px;
            }
            .bg-image {
                position:absolute;
            }
            .bg-image:first-child {
                right:0px;
                top: 35px;
            }
            .bg-image:first-child + .bg-image{
                left: 0px;
                top: 42px;
            }
            .contact-text.flex-col {
                color: #FFF;
                margin-left: auto;
                margin-right: auto;
                width: 247px;
                padding-top: 71px;
            }
            .image-footer-wrapper {
                padding-top: 18px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                padding-bottom: 5px;
            }
            p.txt-458 {
                margin: 0px;
                font-size: 1.2em;
                margin-top: 23px;
                font-family: 'Gilroy-Light';
            }
            .txt-264 {
                margin: 0px;
                font-weight: 500;
                margin-top: 3px;
            }
            .txt-8108 {
                margin: 0px;
                margin-top: 4px;
                line-height: 14px;
                font-size: 1.2rem;
            }
            img.image-carbon {
                margin-top: 15px;
                width: 24px;
            }
            .txt-405 {
                color: #fff;
                margin: 0px;
                margin-top: 17px;
                margin-left: 9px;
                font-family: 'Gilroy-Light';
                font-size: 1.4rem;
            }
            img.image-pin {
                width: 60px;
                height: 27px;
                margin-top: 18px;
            }
            .footermenu {
                padding-top: 26px;
                padding-bottom: 25px;
                font-family: 'Gilroy-Medium';
            }
            .footermenu a {
                font-size: 0.72em;
                margin-right: 24px;
                color:#FFF;
                text-decoration:none;
            }
            .address-pin {
                color: #FFF;
                margin-left: 7px;
            }
        `}</style>
        </>
    )
}