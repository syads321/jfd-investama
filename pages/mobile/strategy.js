import BannerMobile from '../../components/BannerMobile'
import FooterMobile from '../../components/FooterMobile'
export default function Strategy() {
    return (
        <>
            <BannerMobile noribbon noribbonHeight={463}>
                <>
                    <div className="home-banner-content">
                        <p className="txt-266">Who we are</p>
                        <p className="txt-370">
                                Home  >>  What We Do >> Strategy
                        </p>
                    </div>
                </>
            </BannerMobile>
            <div className="wrapper mid">
                <div className="invesment-strategy">
                    <p className="txt-248 text-bold">Our Investment Strategy</p>
                    <p className="txt-651">
                        Our investment strategy defines our persona and embodies our next step
                        in investing
                    </p>
                </div>
            </div>
            <div>
                <img className="mid display-block" src="/images/strategy-image.jpg" />
                <div className="divestment wrapper mid">
                    <div className="title text-center text-bold">
                        <img className="display-block mid" src="/images/divestment.png" />
                        <p className="txt-295">Divestment</p>
                    </div>
                    <p className="txt-424 flex-hcenter text-center">
                        We look for the most efficient and optimal way to generate the highest
                        return or profit to our dearest shareholders in ascertaining their
                        investment, we do invest in hidden gems stocks that we carefully select
                        using our methods, our investment will be updated regularly through
                        general meetings among shareholders of JFD Investama.
                    </p>
                </div>
                <div className="divestment wrapper mid">
                    <div className="title text-center text-bold">
                        <img className="display-block mid" src="/images/rigor.png" />
                        <p className="txt-295">Financial Rigor and <br />
                            Risk Discipline</p>
                    </div>
                    <p className="txt-424 flex-hcenter text-center">
                        We do believe the transparency to our dearest shareholders is the foundation
                        of trust in JFD Investama, we ensure to create capital flexibility and manage risk
                        dynamically, aside we always share consistent news and update regarding the invested industries,
                        witha comprehensive information to our shareholders.
                    </p>
                </div>
                <div className="divestment wrapper mid">
                    <div className="title text-center text-bold">
                        <img className="display-block mid" src="/images/deal-sourcing.png" />
                        <p className="txt-295">Deal Sourcing and <br />
                            Value Creation</p>
                    </div>
                    <p className="txt-424 flex-hcenter text-center">
                        JFD Investment's originality and capability branch from a deep and diverse business network
                        across the country, notably through well-connected and experienced professionals.
                        JFD Investama has built up a solid reputation and network of contact through successful
                        investment and business operations. And also together with our operating partners and in-depth
                        industry knowledge, we do create value in our portfolio companies by actively participating
                        in the management and strategic direction of the portfolio companies. With JFD Investama's
                        extensive and immense network, we realize synergies and open access to the captive markets is
                        one of our driving force
                    </p>
                </div>
                <div className="portofolio">
                    <div className="title mid wrapper text-center text-bold">Our Portfolio</div>
                    <div className="group">
                        <img className="bg display-block mid" src="/images/portfolio.png" />
                    </div>
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
                    font-size: 16px;
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
                    padding-bottom: 80px;
                }
                .group {
                    margin-top: 12px;
                }
            `}</style>
        </>
    )
}