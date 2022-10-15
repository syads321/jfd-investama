import React from "react"
export default function FooterMobile() {
    return (
        <>
            <div className="footer-mobile">
                <img className="bg" src="/images/bg-footer.png" />
                <div className="footer-wrapper image-footer-wrapper mid">
                    <img src="/images/logo-footer.png" />
                </div>
                <div className="footer-wrapper mid">
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
                <div className="footer-wrapper mid">
                    <div className="flex footermenu">
                        <a href="">Home</a>
                        <a href="">Who We Are</a>
                        <a href="">What We Do</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .footer-mobile {
                position: relative;
            }
            .footer-wrapper {
                width: 307px;
            }
            .footer-mobile .bg {
                z-index: -1;
                position: absolute;
                top: 0px;
                width: 100%;
                left:-3px;
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
                font-size: 16px;
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
                font-size: 11px;
            }
            img.image-carbon {
                margin-top: 15px;
            }
            .txt-405 {
                color: #fff;
                margin: 0px;
                margin-top: 19px;
                margin-left: 9px;
                font-family: 'Gilroy-Light';
                font-size: 13px;
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
                font-size: 10px;
                margin-right: 24px;
                color:#FFF;
                text-decoration:none;
            }
            .address-pin {
                color: #FFF;
            }
        `}</style>
        </>
    )
}