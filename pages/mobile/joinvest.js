import BannerMobile from '../../components/BannerMobile'
import FooterMobile from '../../components/FooterMobile'
export default function Joinvest() {
    return (
        <>
            <BannerMobile noribbon noribbonHeight={463}>
                <>
                    <div className="home-banner-content">
                        <p className="txt-266">Who we are</p>
                        <p className="txt-370">
                                Home  >>  What We Do >> Joinvest
                        </p>
                    </div>
                </>
            </BannerMobile>
            <div className="wrapper mid">
                <div className="invesment-strategy">
                    <p className="txt-248 text-bold text-center">Joinvest</p>
                    <p className="txt-651">
                        Joinvest is a subsidiary of JFD Investama, it is our alias to be present in
                        the digital ecosystem. The digital ecosystem that we meant it is including websites,
                        TikTok, and Instagram. We will be creating an end-to-end investment education that will
                        be targeting the selected target market aforementioned before, the digital existence
                        is expected to make our company JFD Investama more appealable to the market and able
                        to create a company that is driven by a community, joinvest-namely will be able to be the
                        second name of JFD Investama that is ear-catching to some of our selected target market.
                        For investment we will be focusing on the quality of content that we will be provided on the
                        social media twice weekly, after several months it is expected that we will be able to convert
                        our audiences into paying customers through the creation of a course that will be given by our
                        mentors in the live session, both online and offline activities.

                    </p>
                </div>
            </div>
            <div style={{ paddingBottom: 40 }}>
                <img className="mid display-block" src="/images/joinvest.png" />
                <div className="divestment wrapper mid">
                    <div className="title text-center text-bold">
                        <img className="display-block mid" src="/images/learn-with.png" />
                        <p className="txt-295">#LearnWithJoinvest</p>
                    </div>
                    <p className="txt-424 flex-hcenter text-center">
                        Learn with joinvest is a campaign that is created by joinvest for our selected target market with the content related to the investing and financial ratios that are used while investing. The learn with joinvest aims for people to get a little or big investing education through the social media platform

                    </p>
                </div>
                <div className="divestment wrapper mid">
                    <div className="title text-center text-bold">
                        <img className="display-block mid" src="/images/analyze.png" />
                        <p className="txt-295">#AnalyzeWithJoinvest</p>
                    </div>
                    <p className="txt-424 flex-hcenter text-center">
                        Analyze with joinvest is the next step activity from the learn with joinvest,
                        where here we invite our audiences to analyze their stockpick using the tools
                        that we have been created before

                    </p>
                </div>
            </div>
            <FooterMobile />
            <style jsx>{`
                .wrapper {
                    width: 282px;
                }
                .invesment-strategy {
                    margin-top: 42px;
                    margin-bottom: 26px;
                }
                .txt-651 {
                    margin-top: 3px;
                    font-size: 1.2em;
                    font-family: 'Gilroy-Regular';
                }
                .txt-248 {
                    margin-bottom: 7px;
                }
                .divestment {
                    font-family: 'Gilroy-Regular';
                    margin-top: 35px;
                }
                .divestment .title {
                    margin-bottom: 16px;
                    border-bottom: 1px solid rgba(11, 43, 64, 0.3);
                }
                .txt-424 {
                    font-size: 14px;
                }
                .txt-295 {
                    margin-bottom: 6px;
                }
                .portofolio {
                    margin-top: 89px;
                }
                .group {
                    margin-top: 12px;
                }
                .txt-370 {
                    font-size: 1.2em;
                    font-family: Gilroy-Medium,sans-serif;
                    font-weight: undefined;
                    color: rgba(255,255,255,1);                 
                    width: 258px;
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
                    padding-top: 314px;
                  }
            `}</style>
        </>
    )
}