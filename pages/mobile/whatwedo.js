import BannerMobile from '../../components/BannerMobile'
import FooterMobile from '../../components/FooterMobile'
export default function Strategy() {
    return (
        <>
            <BannerMobile noribbon noribbonHeight={458}>
                <>
                    <div className="home-banner-content">
                        <p className="txt-266">What We Do</p>
                        <p className="txt-370">
                                Home  >>  What We Do
                        </p>
                    </div>
                </>
            </BannerMobile>
            <div className="wwd-preface mid">
                <p className="txt-704">
                    Our investment strategy defines our persona and embodies our next step
                    in investing
                </p>
            </div>
            <div className="wwd-group mid">
                <a href="/strategy" className="wwd-item flex-col-hstart-vstart">
                    <img className="bg" src="/images/strategy-tb.png" />
                    <div className="group-43">
                        <p className="txt-334 text-center">Investment</p>
                    </div>
                    <div className="flex-col title mid">
                        <p className="txt-485">Our Investment Strategy</p>
                        <p className="txt-362"> > GO THROUGH</p>
                    </div>
                </a>
                <a href="/joinvest" className="wwd-item flex-col-hstart-vstart">
                    <img className="bg" src="/images/joinvest-tb.jpg" />
                    <div className="group-43">
                        <p className="txt-334 text-center">Community</p>
                    </div>
                    <div className="flex-col title mid">
                        <p className="txt-485">Joinvest</p>
                        <p className="txt-362"> > GO THROUGH</p>
                    </div>
                </a>
            </div>
            <FooterMobile />
            <style jsx>{`
                .wwd-preface.mid {
                    max-width: 292px;
                    margin-top: 50px;
                    font-family: "Gilroy-Light";
                    border-top: 1px solid #0B2B40;
                    padding-top: 10px;
                    color: #0B2B40;
                }
                .wwd-group {
                    width: 313px;
                    margin-top: 36px;
                    padding-top: 20px;
                }
                .wwd-item {
                    position:relative;
                    padding-top:7px;
                    margin-bottom: 36px;
                    display:block;
                }
                .wwd-item .bg {
                    position:absolute;
                    top:0px;
                    left:0px;
                    width:100%;
                    z-index:-1;
                }
                .group-43 {
                    background: #FFF;
                    width: 90px;
                    margin-left: 32px;
                    height: 31px;
                    line-height: 31px;
                    border-radius: 7px;
                    font-family: 'Gilroy-Medium';
                    font-size: 13px;
                }
                .title {
                    width: 216px;
                    background: #FFF;
                    border-radius: 8px;
                    padding-top: 1px;
                    margin-top: 129px;
                    padding-left: 26px;
                    padding-right: 1px;
                    box-shadow: 0px 3.52513px 3.52513px rgba(0, 0, 0, 0.25);
                    height: 104px;
                }
                p.txt-704 {
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
                .txt-485 {
                    font-family: 'Gilroy-Bold';
                    font-size: 19px;
                    color: #0B2B40;
                    margin-bottom: 7px;
                }
                .txt-362 {
                    font-family: 'Gilroy-Light';
                    font-size: 12px;
                    margin-top: 0px;
                }
                .txt-370 {
                    font-size: 16px;
                    font-family: Gilroy-Medium,sans-serif;
                    font-weight: undefined;
                    color: rgba(255,255,255,1);
                    width: 238px;
                    word-wrap: break-word;
                    line-height: 20px;
                    margin:0px;
                    margin-top: 9px;
                  }
                  
                  .txt-266 {
                    font-size: 45px;
                    font-family: Gilroy-Black,sans-serif;
                    font-weight: undefined;
                    line-height: 96%;
                    color: rgba(255,255,255,1);
                    margin:0px;
                  }
                  .home-banner-content {
                    padding-top: 315px;
                  }
                `}</style>
        </>
    )
}