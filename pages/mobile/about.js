import BannerMobile from '../../components/BannerMobile'
import FooterMobile from './../../components/FooterMobile'
export default function Home() {
    return (
        <>
            <BannerMobile noribbon>
                <div className="home-banner-content">
                    <p className="txt-266">Who we are</p>
                    <p className="txt-370">
                            Home  >>  Who We Are
                    </p>
                </div>
                <style jsx>{`
                  .txt-370 {
                    font-size: 1.2em;
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
                    font-size: 3.3em;;
                    font-family: Gilroy-Black,sans-serif;
                    font-weight: undefined;
                    line-height: 96%;
                    color: rgba(255,255,255,1);
                    margin:0px;
                  }
                  .home-banner-content {
                    padding-top: 253px;
                  }
                `}</style>
            </BannerMobile>
            <div className="wrapper">
                <img className="about-bg" src="/images/about-img-sm.png" />
                <div className="about-content mid">
                    <p className="txt-6610 flex-hcenter">PT JFD Investama</p>
                    <p className="txt-799 flex-hend text-justify body-mobile">
                        JFD Investama was founded in 2022 and pursues an ambition of becoming
                        top of mind choice regarding the investment company in Indonesia. Our
                        focus is to find the wonderful yet undervalue company in the financial
                        market. Thus, we strive to enabling the practicality of investing and
                        finding wonderful company through our core value. Perseverance,
                        worthiness, growth and unity.{" "}
                    </p>
                    <p className="txt-8410 flex-hend text-justify body-mobile">
                        Furthermore, JFD Investama believes that GCG and unity must become part
                        of our identity Which is rooted on our company philosophy of “Growing
                        Together”. JFD able to deliver their philosophy by putting forwards
                        energy to giving back to society, that encourages educational, financial
                        and social growth.
                    </p>
                    <div className="co-founder">
                        <p className="txt-139 text-bold body-mobile">Muhammad Jovan Ramadhan</p>
                        <p className="txt-085 body-mobile">Commissioner & Founder</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="vision mid text-center">
                    <img className="vision-image mid" src="/images/our-vision.png" />
                    <p className="txt-743 flex-hcenter">
                        Our vision for JFD Investama is described below: <br />  <br /> To become the first
                        choice for Indonesian young generations investors to participate the
                        dynamic growth in the investing market
                    </p>
                </div>
                <div className="vision mid text-center">
                    <img className="vision-image mid" src="/images/our-mission.png" />
                    <p className="txt-743 flex-hcenter">
                        Our mission for JFD Investama is described as below: <br />  <br />
                        Becoming a world-class investment company that excels on finding the
                        wonderful company in the stock market with the value of growing together
                        to create a value for our stakeholders and the nation
                    </p>
                </div>
                <div>
                    <img className="core-values display-block mid" src="/images/core-values.png" />
                    <img className="core-values-group display-block mid" src="/images/values-group.png" />
                </div>
                <div className='our-logo mid text-center'>Our Logo</div>
                <img className="our-logo-image mid display-block" src="/images/our-logo.png" />
                <div className='vision mid text-center' style={{ marginBottom: 12, width: 272 }}>
                    JFD Investama Logo consist of 5 visual graphics that represent our
                    goals and vision. The graphical logo represents of simplicity that is wrapped
                    in multi-interpretational element.
                </div>
                <img className="group-image display-block mid" src="/images/group-image.png" />
                {/* <img className="bg-main-content" src="/images/bg-main-content.png" /> */}
                <img className="img-bg-about" src="/images/ribbon.png" />
            </div>
            <div className="our-team-wrapper mid">
                <div className="our-team text-center">Our Team</div>
                <div className="jovan text-center">
                    <img
                        src="/images/jovan-sm.jpg"
                        alt="Not Found"
                        className="image display-block mid"
                        style={{width: 223}}
                    />
                    <p className="txt-7910 flex-hcenter">M Jovan Ramadhan</p>
                    <p className="txt-826 flex-hcenter">Commissioner & Founder</p>
                </div>
                <div className="jovan text-center">
                    <img
                        src="/images/dihliz-sm.jpg"
                        alt="Not Found"
                        className="image"
                        style={{width: 223}}
                    />
                    <p className="txt-7910 flex-hcenter">M Dihliz Maulana</p>
                    <p className="txt-826 flex-hcenter">CEO & Co-Founder</p>
                </div>
                <div className="jovan text-center">
                    <img
                        src="/images/fara-sm.jpg"
                        alt="Not Found"
                        className="image"
                        style={{width: 223}}
                    />
                    <p className="txt-7910 flex-hcenter">Farah Qonita S</p>
                    <p className="txt-826 flex-hcenter">CEO & Co-Founder</p>
                </div>
            </div>
            <FooterMobile />
            <style>{`
                .wrapper {
                    max-width: 380px;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                }
                img.about-bg {
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    margin-top: -79px;
                }
                p.txt-6610.flex-hcenter {
                    font-size: 2.4em;
                    font-weight: bold;
                    font-family: Gilroy-Black;
                    margin-bottom: 28px;
                    color: #0B2B40;
                }
                .about-content.mid {
                    width: 290px;
                    font-family: Gilroy-Medium;
                    color:#838383
                }
                p.txt-139 {
                    margin-top: 39px;
                    margin-bottom: 0px;
                }
                p.txt-085 {
                    margin: 0px;
                }
                .co-founder {
                    color: #838383;
                }
                .main-content {
                    background: #0B2B40;
                    color: #FFF;
                    margin-top: 52px;
                    padding-top: 67px;
                    padding-bottom: 176px;
                    position:relative;
                }
                .img-bg-about {
                    position: absolute;
                    bottom: -35px;
                    right: 0px;
                    width: 99px;
                }
                .vision {
                    width: 280px;
                    font-family: Gilroy-Medium;
                    font-size: 1.07em;
                    margin-bottom: 61px;
                }
                img.vision-image {
                    display: block;
                    margin-bottom: 33px;
                }
                img.core-values {
                    margin-top: -11px;
                }
                img.core-values-group {
                    margin-top: 30px;
                }
                .our-logo {
                    font-family: Gilroy-Black;
                    color: #7CE495;
                    margin-top: 56px;
                    margin-bottom: 21px;
                }
                img.our-logo-image.mid.display-block {
                    margin-bottom: 14px;
                    width:158px;
                }
                img.group-image.display-block.mid {
                    margin-top: 29px;
                }
                .our-team-wrapper.mid {
                    width: 226px;
                    padding-top: 31px;
                }
                .our-team {
                    font-family: Gilroy-Black;
                    margin-bottom: 42px;
                }
                .txt-7910 {
                    font-family: Gilroy-Black;
                    font-size: 21px;
                    margin: 0px;
                    margin-top: 5px;
                }
                .txt-826 {
                    font-family: Gilroy-Medium;
                    font-size: 14px;
                    margin: 0px;
                    margin-top: 7px;
                }
                .jovan {
                    margin-bottom: 48px;
                }
            `}</style>
        </>
    )
}
