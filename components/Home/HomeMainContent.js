import React from "react"
import Link from 'next/link'

export default function HomeMainContent() {
    return (
        <div className="container">
            <div className="home-main-content row">
                <div className="col-xs-12 text-center">
                    <p className="txt-567">About Our Company</p>
                    <div className="vector-1"></div>
                </div>
                
                <div className="col-xs-4">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/a0d90uc2cyj-5%3A125?alt=media&token=1897d701-1c5e-448e-bebd-c54b119f6a04"
                        alt="Not Found"
                        className="asset-31"
                    />
                    <p className="txt-885 flex-hcenter">Growing. Together.</p>
                </div>
                <div className="col-xs-8">
                    <p className="txt-311 flex-hend">
                        JFD Investama was founded in 2022 and pursues an ambition of
                        becoming top of mind choice regarding the investment company in
                        Indonesia. Our focus is to find the wonderful yet undervalue company
                        in the financial market. Furthermore, JFD Investama believes that
                        GCG and unity must become part of our identity Which is rooted on
                        our company philosophy of “Growing Together”. JFD able to deliver
                        their philosophy by putting forwards energy to giving back to
                        society, that encourages educational, financial and social growth.
                    </p>
                    <Link href="/about"><p className="txt-173 flex-hend">More About Us </p></Link>
                </div>

                
                <div className="group-732 flex-row">
                    <div className="group-944 flex-col">

                        
                    </div>
                    <div className="group-227 flex-col">

                    </div>
                </div>
                <style jsx>{`
            /* Homemaincontent */

            p {
            margin: 0;
            }
            
            // .flex-row {
            // display: flex;
            // flex-direction: row;
            // }
            
            .flex-col {
            display: flex;
            flex-direction: column;
            }
            
            .flex-hcenter {
            justify-content: center;
            }
            
            .flex-hend {
            justify-content: flex-end;
            }
            
            .home-main-content {
            position: relative;
            // width: 1152.75px;
            // height: 385.5px;
            // margin-top: 82px;
            padding-top: 79px;
            }
            
            .txt-567 {
            // position: absolute;
            // top: 0px;
            // left: 395px;
            font-size: 30px;
            font-family: Gilroy-Black, sans-serif;
            font-weight: undefined;
            color: rgba(0, 0, 0, 1);
            height: 38px;
            word-wrap: break-word;
            }
            
            .group-732 {
            // position: absolute;
            // top: 88px;
            // none: 0px;
            // width: 1154px;
            // height: 298px;
            }
            
            .group-944 {
            margin-right: 36px;
            box-sizing: border-box;
            height: fit-content;
            }
            
            .asset-31 {
            width: 319.5px;
            height: 190.5px;
            margin-bottom: 37px;
            margin-top: 63px;
            }
            
            .txt-885 {
            font-size: 36px;
            font-family: Gilroy-Bold, sans-serif;
            font-weight: undefined;
            color: rgba(0, 0, 0, 1);
            text-align: center;
            width: 351px;
            height: 45px;
            word-wrap: break-word;
            }
            
            .group-227 {
            height: 100%;
            }
            
            .txt-311 {
            font-size: 21px;
            font-family: Gilroy-Medium, sans-serif;
            font-weight: undefined;
            line-height: 136%;
            color: rgba(106, 106, 106, 1);
            text-align: left;
            // width: 767px;
            height: 235px;
            word-wrap: break-word;
            margin-bottom: 35px;
            margin-top: 56px;
            }
            
            .txt-173 {
            font-size: 21px;
            font-family: Gilroy-Black, sans-serif;
            font-weight: undefined;
            color: rgba(0, 0, 0, 1);
            text-align: right;
            word-wrap: break-word;
            text-align:left;
            cursor:pointer;
            }

            .vector-1 {
                border: 0.75px solid rgba(0, 0, 0, 0.2);
                position:absolute;
                top:50px;
                width:100%;
            }
            
        `}</style>
            </div>
        </div>
    )
}
