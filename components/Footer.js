import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter();
    return (
        <div className="footer" style={{ background: `rgba(11,43,64,1) url('./images/footer-bg.png') no-repeat left center`}}>
            <div className="group-5410 flex-col">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A986?alt=media&token=e96d1814-d48a-4f21-a316-7846f0d17259"
                    alt="Not Found"
                    className="asset-12"
                />
                <div className="flex-row">
                    <div className="contact-text">
                        <div className="group-551 flex-col">
                            
                            <div className="group-551 flex-col">
                                <div className="group-193 flex-row">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A1012?alt=media&token=18b81c2b-1bf4-4106-9cfa-66bc0716dbf5"
                                        alt="Not Found"
                                        className="ep-place"
                                    />
                                    <p className="txt-459">Virtual Office</p>
                                </div>
                                <div className="flex-row">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A1023?alt=media&token=ed336197-8b1a-4541-990c-4fe602c64733"
                                        alt="Not Found"
                                        className="ep-place"
                                    />
                                    <p className="txt-907">support@jfd-investama.com</p>
                                </div>
                            </div>
                            <p className="txt-828">Office 88</p>
                            <p className="txt-093">
                            Jl. Casablanca Raya Kav. 88 Office 88 Lt. 9 <br/>Unit A
Office 88, Kota Casablanca, Kel. Menteng Dalam,
Kec. Tebet, <br/> Jakarta Selatan, 12870.
                            </p>
                        </div>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A1021?alt=media&token=3d0305d9-06e6-4bdd-9e15-902fdd582b2d"
                            alt="Not Found"
                            className="fluent-call-20-regular"
                        />
                        <div className="group-551 flex-col">
                            <div className="group-193 flex-row">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A1012?alt=media&token=18b81c2b-1bf4-4106-9cfa-66bc0716dbf5"
                                    alt="Not Found"
                                    className="ep-place"
                                />
                                <p className="txt-459">Virtual Office</p>
                            </div>
                            <div className="flex-row">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A1023?alt=media&token=ed336197-8b1a-4541-990c-4fe602c64733"
                                    alt="Not Found"
                                    className="ep-place"
                                />
                                <p className="txt-907">support@jfd-investama.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu flex-col">
                        <div className="group-760 flex-row">
                            <p className="txt-2105"> </p>
                            <Link href="/"><a className={`txt-661 ${router.pathname == "/" ? "active" : ""}`}>Home</a></Link>
                        </div>
                        <div className="group-760 flex-row">
                            <p className="txt-2105"> </p>
                            <Link href="/about"><a className={`txt-661 ${router.pathname == "/about" ? "active" : ""}`}>Who We Are</a></Link>
                        </div>
                        <div className="group-760 flex-row">
                            <p className="txt-2105"> </p>
                            <Link href="/whatwedo"><a className={`txt-661 ${["/whatwedo", "/joinvest", "/strategy"].indexOf(router.pathname) !== -1 ? "active" : ""}`}>What We Do</a></Link>
                        </div>
                        <div className="flex-row">
                            <p className="txt-2105"> </p>
                            <Link href="/contact"><a className={`txt-661 ${router.pathname == "/contact" ? "active" : ""}`}>Contact</a></Link>
                        </div>
                    </div>
                    {/* <div className="contact-form flex-col">
                        <p className="txt-320">Contact Us</p>
                        <div className="group-362 flex-row">
                            <p className="txt-659">Write your email..</p>
                            <p className="txt-661">OK</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ihldj3rd3e-20%3A1104?alt=media&token=8c32b8a4-176b-491b-876f-75d7771bcf2a"
                alt="Not Found"
                className="group"
            />
            <style jsx>{`
            /* Footer */

            p {
              margin: 0;
            }
            p.active {
              color: hsl(154deg 31% 52% / 86%) !important;
            }
            
            .flex-col {
              display: flex;
              flex-direction: column;
            }
            
            .flex-row {
              display: flex;
              flex-direction: row;
            }
            
            .footer {
                position: relative;
                padding: 0px 0px 0.28px 0px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                width: 100%;
                height: 449.28px;
                overflow: hidden;
            }
            
            .group-5410 {
              padding: 30px 168px 113px 200px;
              box-sizing: border-box;
            }
            
            .asset-12 {
              width: 109.5px;
              height: 65.25px;
              margin-bottom: 43px;
            }
            
            .contact-text {
              position: relative;
              margin-right: 119px;
              box-sizing: border-box;
              width: 400px;
              height: 100%;
            }
            
            .group-551 {
              position: absolute;
              top: 0px;
              none: 0px;
              height: 204px;
            }
            
            .group-551 {
              position: absolute;
              top: 0px;
              none: 0px;
              width: 100%;
              height: 100%;
            }
            
            .group-193 {
              margin-bottom: 128px;
              box-sizing: border-box;
              width: fit-content;
            }
            
            .ep-place {
              width: 37.5px;
              margin-right: 11px;
              height: 100%;
            }
            
            .txt-459 {
              font-size: 21px;
              font-family: Gilroy-Regular, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            . {
              width: fit-content;
            }
            
            .ep-place {
              width: 37.5px;
              margin-right: 11px;
              height: 100%;
            }
            
            .txt-907 {
              font-size: 18px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            .txt-702 {
              position: absolute;
              top: 140px;
              left: 49px;
              font-size: 18px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              width: 164px;
              height: 22px;
              word-wrap: break-word;
            }
            
            .txt-093 {
              position: absolute;
              top: 73px;
              left: 49px;
              font-size: 15px;
              font-family: Gilroy-Regular, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              height: 54px;
              word-wrap: break-word;
              margin-bottom: 12px;
            }
            
            .fluent-call-20-regular {
              position: absolute;
              top: 129px;
              left: 0px;
              width: 37.5px;
              height: 38.71px;
            }
            
            .group-551 {
              position: absolute;
              top: 0px;
              none: 0px;
              height: 204px;
            }
            
            .group-193 {
              margin-bottom: 128px;
              box-sizing: border-box;
              width: fit-content;
            }
            
            .ep-place {
              width: 37.5px;
              margin-right: 11px;
              height: 100%;
            }
            
            .txt-459 {
              font-size: 21px;
              font-family: Gilroy-Regular, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            . {
              width: fit-content;
            }
            
            .ep-place {
              width: 37.5px;
              margin-right: 11px;
              height: 100%;
            }
            
            .txt-907 {
              font-size: 18px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            .footer-menu {
              margin-right: 29px;
              box-sizing: border-box;
              height: fit-content;
            }
            
            .group-760 {
              margin-bottom: 13px;
              box-sizing: border-box;
              width: fit-content;
            }
            
            .txt-2105 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
              margin-right: 35px;
            }
            
            .txt-661 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            a.txt-661:hover, a.txt-661.active {
              text-decoration:none;
              color:#7ce495!important;
            }
            
            
            .group-760 {
              margin-bottom: 13px;
              box-sizing: border-box;
            }
            
            .txt-2105 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
              margin-right: 35px;
            }
            
            .txt-661 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            .group-1110 {
              margin-bottom: 12px;
              box-sizing: border-box;
              width: fit-content;
            }
            
            .txt-2105 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
              margin-right: 35px;
            }
            
            .txt-661 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            . {
              width: fit-content;
            }
            
            .txt-2105 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
              margin-right: 35px;
            }
            
            .txt-661 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            .contact-form {
              padding: 43px 33.25px 59px 32px;
              box-sizing: border-box;
              border-radius: 7.5px;
              background-color: rgba(255, 255, 255, 0.1);
              height: fit-content;
            }
            
            .txt-320 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
              margin-bottom: 16px;
            }
            
            .group-362 {
              padding: 15px 19px 14px 22px;
              box-sizing: border-box;
              border-radius: 7.5px;
              background-color: rgba(11, 43, 64, 1);
              width: fit-content;
            }
            
            .txt-659 {
              font-size: 15px;
              font-family: Gilroy-Regular, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 0.2);
              word-wrap: break-word;
              margin-right: 150px;
            }
            
            .txt-661 {
              font-size: 21px;
              font-family: Gilroy-Bold, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              word-wrap: break-word;
            }
            
            .group {
              position: absolute;
              top: 241px;
              right: 0px;
              width: 211.73px;
              height: 268.78px;
            }

            .txt-828 {
                font-size: 21px;
                font-family: Gilroy-Bold, sans-serif;
                font-weight: undefined;
                color: rgba(255, 255, 255, 1);
                word-wrap: break-word;
                position: absolute;
                top: 47px;
                left: 50px;
              }
            .footer-menu p {
              cursor:pointer;
            }
      
      `}</style>
        </div>
    )
}
