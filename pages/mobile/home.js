import BannerMobile from '../../components/BannerMobile'
import FooterMobile from './../../components/FooterMobile'
export default function HomeMobile() {
    return (
        <>
            <BannerMobile>
                <div className="home-banner-content">
                    <p className="txt-266">Growing Together</p>
                    <p className="txt-370">
                        We focus on finding the wonderful yet undervalue company in the
                        financial market.
                    </p>
                </div>
                <style jsx>{`
                  .txt-370 {
                    font-size: 16px;
                    font-family: Gilroy-Medium,sans-serif;
                    font-weight: undefined;
                    color: rgba(255,255,255,1);
                    width: 238px;
                    word-wrap: break-word;
                    line-height: 20px;
                    margin:0px;
                    margin-top: 20px;
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
                    padding-top: 181px;
                  }
                `}</style>
            </BannerMobile>
            <div className="wrapper">
                <div className="home-wrapper">
                    <img className="home-bg" src="/images/home-bg.jpg" />
                    <div className="content">
                        <p className="txt-708">About <br /> Our Company</p>
                        <p className="txt-660 flex-hend">
                            JFD Investama was founded in 2022 and pursues an ambition of becoming
                            top of mind choice regarding the investment company in Indonesia. Our
                            focus is to find the wonderful yet undervalue company in the financial
                            market.
                            <br /><br />
                            Furthermore, JFD Investama believes that GCG and unity must
                            become part of our identity. Which is rooted on our company philosophy
                            of “Growing Together”. JFD able to deliver their philosophy by putting
                            forwards energy to giving back to society, that encourages educational,
                            financial and social growth.
                        </p>
                        <p className="txt-249 flex-hend">More About Us </p>
                    </div>

                </div>
                <div className="mid-preface-home">
                    <img className="bg" src="/images/mid-preface-home.jpg" />
                    <p className="txt-964">
                        Our investment strategy defines our persona and embodies our next step
                        in investing
                    </p>
                </div>
                <div className="content-bottom-home">
                    <div className="jo-invest flex-col-hstart-vstart">
                        <div className="group-353 flex-col">
                            <p className="txt-915">Our Investment Strategy</p>
                            <p className="txt-1710">
                                JFD Investama invests in high growth and innovative companies in
                                Indonesia.
                            </p>
                        </div>
                        <p className="txt-1210 flex-hend">More About Us </p>
                    </div>
                    <div className="jo-invest flex-col-hstart-vstart" style={{ marginTop: 24 }}>
                        <div className="group-353 flex-col">
                            <p className="txt-915">Joinvest</p>
                            <p className="txt-1710">
                                Focusing on growing the community and quality of content in the social media.
                            </p>
                        </div>
                        <p className="txt-1210 flex-hend">More About Us </p>
                    </div>
                </div>
                <FooterMobile />
            </div>
            <style>{`
     .wrapper {
        max-width: 380px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
     .home-wrapper {
        padding-top: 138px;
        position: relative;
        padding-bottom: 146px;
    }
    .home-bg {
        position: absolute;
        width: 100%;
        z-index: -1;
        left: 41px;
        top: 149px;
    }
    .content {
        margin-left: auto;
        margin-right: auto;
        width: 250px;
    }
    .txt-660 {
        font-size: 14px;
        margin-top: 34px;
        text-align: justify;
    }
    .group-28 {
        position: relative;
        width: 100%;
        height: 462px;
      }
      .txt-708 {
        margin-top: -54px;
        font-weight: bold;
        font-size: 18px;
        width: 142px;
    }
    .content-bottom-home {
        margin-top: 44px;
        margin-bottom: 84px;
    }
    .jo-invest.flex-col-hstart-vstart {
        margin-left: auto;
        margin-right: auto;
        width: 329px;
        background: #359D9E;
        color: #FFF;
        padding-left: 35px;
        padding-right: 64px;
        padding-bottom: 17px;
    }
    .group-353 {
        padding-top: 15px;
    }
    .txt-915 {
        font-weight: bold;
        font-size: 19px;
        margin-bottom: -8px;
    }
    .txt-1210 {
        font-weight: bold;
    }
    .mid-preface-home {
        margin-top: 117px;
        position: relative;
    }
    .mid-preface-home .bg {
        width: 100%;
        position: absolute;
        z-index: -1;
        top: 0px;
    }
    .txt-964 {
        padding-top: 76px;
        color: #FFF;
        margin-left: 42px;
        width: 233px;
    }
      `}</style>
        </>

    )
}
