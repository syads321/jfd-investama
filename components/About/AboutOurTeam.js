import React from "react"

export default function AboutOurTeam() {
    return (
        <>
           <div style={{ background: `url('./images/our-team-bg.png') no-repeat`}}>
            <div className="our-team container">
                    <div className="flex-col-hcenter">
                        <p className="txt-3108">Our Team</p>
                        <div className="group-1071 flex-row">
                            <div className="jovan flex-col-hcenter">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5rp5hm7zlw5-253%3A211?alt=media&token=e2fd07d3-50e6-47cf-9718-261fc7a98e36"
                                    alt="Not Found"
                                    className="image"
                                />
                                <p className="txt-189 flex-hcenter">M Jovan Ramadhan</p>
                                <p className="txt-745 flex-hcenter">Commissioner & Founder</p>
                            </div>
                            <div className="jovan flex-col-hcenter">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5rp5hm7zlw5-253%3A213?alt=media&token=f8fac61b-7af0-4757-996d-5eefbc73b33e"
                                    alt="Not Found"
                                    className="image-1"
                                />
                                <p className="txt-189 flex-hcenter">M Dihliz Maulana</p>
                                <p className="txt-745 flex-hcenter">CEO & Co-Founder</p>
                            </div>
                            <div className="flex-col-hcenter">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5rp5hm7zlw5-253%3A215?alt=media&token=a10f3104-9ace-44d3-adba-c2f5976fe2f8"
                                    alt="Not Found"
                                    className="image-1"
                                />
                                <p className="txt-189 flex-hcenter">Farah Qonita S</p>
                                <p className="txt-745 flex-hcenter">CFO & Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <style>{`
                    /* Ourteam */

                    p {
                        margin: 0;
                    }
                    
                    .flex-col-hcenter {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .flex-row {
                        display: flex;
                        flex-direction: row;
                    }
                    
                    .flex-hcenter {
                        justify-content: center;
                    }
                    
                    .our-team {
                        padding: 85px 89px 1px 25px;
                        box-sizing: border-box;
                        max-width: 1077px;
                        height: 600px;
                        margin-bottom: 160px;
                        overflow: hidden;
                    }
                    
                    .txt-3108 {
                        font-size: 30px;
                        font-family: Gilroy-Black, sans-serif;
                        color: rgba(0, 0, 0, 1);
                        word-wrap: break-word;
                        margin-bottom: 30px;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                        width: 100%;
                        text-align: center;
                        padding-bottom: 24px;
                    }
                    
                    .group-1071 {
                        width: 100%;
                    }
                    
                    .jovan {
                        margin-right: 39px;
                        box-sizing: border-box;
                        height: 100%;
                    }
                    
                    .image {
                        width: 287.5px;
                        height: 332px;
                        margin-bottom: 13px;
                    }
                    
                    .txt-189 {
                        font-size: 28.5px;
                        font-family: Gilroy-Black, sans-serif;
                        font-weight: undefined;
                        color: rgba(0, 0, 0, 1);
                        text-align: center;
                        width: 296px;
                        height: 34px;
                        word-wrap: break-word;
                        margin-bottom: 6px;
                    }
                    
                    .txt-745 {
                        font-size: 18px;
                        font-family: Gilroy-Medium, sans-serif;
                        font-weight: undefined;
                        color: rgba(0, 0, 0, 1);
                        text-align: center;
                        width: 225px;
                        height: 46px;
                        word-wrap: break-word;
                    }
                    
                    .jovan {
                        margin-right: 39px;
                        box-sizing: border-box;
                        height: 100%;
                    }
                    
                    .image-1 {
                        width: 287px;
                        height: 332px;
                        margin-bottom: 13px;
                    }
                    
                    .txt-189 {
                        font-size: 28.5px;
                        font-family: Gilroy-Black, sans-serif;
                        font-weight: undefined;
                        color: rgba(0, 0, 0, 1);
                        text-align: center;
                        width: 296px;
                        height: 34px;
                        word-wrap: break-word;
                        margin-bottom: 6px;
                    }
                    
                    .txt-745 {
                        font-size: 18px;
                        font-family: Gilroy-Medium, sans-serif;
                        font-weight: undefined;
                        color: rgba(0, 0, 0, 1);
                        text-align: center;
                        width: 225px;
                        height: 46px;
                        word-wrap: break-word;
                    }
                    
                    . {
                        height: 100%;
                    }
                    
                    .image-1 {
                        width: 287px;
                        height: 332px;
                        margin-bottom: 13px;
                    }
                    
                    .txt-189 {
                        font-size: 28.5px;
                        font-family: Gilroy-Black, sans-serif;
                        font-weight: undefined;
                        color: rgba(0, 0, 0, 1);
                        text-align: center;
                        width: 296px;
                        height: 34px;
                        word-wrap: break-word;
                        margin-bottom: 6px;
                    }
                    
                    .txt-745 {
                        font-size: 18px;
                        font-family: Gilroy-Medium, sans-serif;
                        font-weight: undefined;
                        color: rgba(0, 0, 0, 1);
                        text-align: center;
                        width: 225px;
                        height: 46px;
                        word-wrap: break-word;
                    }
                    
                    `}</style>
        </>
    )
}
