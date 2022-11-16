import React from "react";
import FooterMobile from "../../components/FooterMobile";
export default function Contact() {
    return (
        <>
            <div className="main-wrapper">
                <img className="logo-img" style={{width: 80}} src="/images/logo-sm.svg" />
                <img className="contact-bg" src="/images/contact-bg.jpg" />
                <div className="contact-us mid wrapper gilroy-black">
                    <p className="txt-6101">Contact Us</p>
                </div>
                <div className="wrapper contact-office mid">
                    <div className="group-453 mid">
                        <div className="flex">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/znfl3gyhrce-259%3A261?alt=media&token=bfc257ca-0694-48f8-b8b6-3c49f7373619"
                                alt="Not Found"
                                className="image"
                            />
                            <div>
                                <p className="txt-246 text-bold">Virtual Office</p>
                            </div>
                        </div>
                        <p className="txt-405 text-bold">Office 88</p>
                        <p className="txt-068 gilroy-regular">
                            Jl. Casablanca Raya Kav. 88 Office 88 Lt. 9 Unit A Office 88, Kota
                            Casablanca, Kel. Menteng Dalam, Kec. Tebet, Jakarta Selatan, 12870.
                        </p>
                    </div>
                </div>
                <div className="contact-phone wrapper mid">
                    <div className="group-8102 mid">
                        <p className="txt-8610 text-bold">Quick Contact</p>
                        <div className="flex">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2605axg2lz2-259%3A265?alt=media&token=e5f28b8f-5695-4ebd-a4d0-18ba01299d2f"
                                alt="Not Found"
                                className="image"
                            />
                            <div className="email-wrapper gilroy-regular"><p className="txt-972">Email:</p>
                                <p className="txt-447">info@jfd-investama.com</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMobile />

            <style>
                {`
                .logo-img {
                    position:absolute;
                    top: 33px;
                    left: 41px;
                }
                .main-wrapper {
                    position:relative;
                    padding-bottom: 61px;
                    overflow:hidden;
                }
                .wrapper {
                     max-width: 294px;
                }
                img.contact-bg {
                    position: absolute;
                    left: -4px;
                    height: 100%;
                    z-index: -1;
                }
                .contact-us {
                    padding-top: 161px;
                    color: #FFF;
                    font-size: 3em;
                }
                .txt-6101 {
                    margin: 0px;
                }
                .contact-office {
                    color: #FFF;
                    background: #DD;
                    background: rgba(53, 157, 158, 0.5);
                    border-radius: 18px;
                    margin-top: 19px;
                    padding-bottom: 37px;
                }
                .group-453 {
                    width: 234px;
                    padding-top: 15px;
                }
                .contact-office img.image {
                    width: 32px;
                    height: 32px;
                    margin-left: -7px;
                    margin-right: 8px;
                    margin-top: 10px;
                }
                p.txt-246 {
                    font-size: 1.1em;
                }
                .txt-405 {
                    font-size: 1.4em;
                    margin-top: 22px;
                    margin-bottom: 0px;
                }
                .txt-068 {
                    font-size: 13px;
                    margin-top: 10px;
                }
                .contact-phone {
                    background: rgba(124, 228, 149, 0.5);
                    color: #FFF;
                    margin-top: 17px;
                    border-radius: 18px;
                }
                .group-8102 {
                    width: 235px;
                    padding-top: 18px;
                    padding-bottom: 29px;
                }
                p.txt-8610 {
                    font-size: 1.24em;
                }
                .email-wrapper {
                    margin-left: 10px;
                    margin-top: 16px;
                }
                .email-wrapper p {
                    margin: 0;
                }
                .contact-phone .image {
                    width: 30px;
                    height: 33px;
                    margin-top: 10px;
                }
                `}
            </style>
        </>
    )
}