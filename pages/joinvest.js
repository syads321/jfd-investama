import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import InvesmentStrategy from '../components/Joinvest/InvestmentStrategy'
import Divestment from '../components/Joinvest/Divestment'

export default function Home() {
    return (
        <Layout>
            <Banner height={462}>
                <div className="about-headline">
                    <p className="txt-406">Joinvest</p>
                    <p className="txt-101">Home  >>  What We Do >> Joinvest</p>
                </div>
            </Banner>
            <div className="portfolio-wrapper">
                <div className="container">
                    <InvesmentStrategy title="Joinvest">
                        Joinvest is a subsidiary of JFD Investama, it is our alias to be present in the digital ecosystem. The digital ecosystem that we meant it is including websites, TikTok, and Instagram. We will be creating an end-to-end investment education that will be targeting the selected target market aforementioned before, the digital existence is expected to make our company JFD Investama more appealable to the market and able to create a company that is driven by a community, joinvest-namely will be able to be the second name of JFD Investama that is ear-catching to some of our selected target market. For investment we will be focusing on the quality of content that we will be provided on the social media twice weekly, after several months it is expected that we will be able to convert our audiences into paying customers through the creation of a course that will be given by our mentors in the live session, both online and offline activities.
                    </InvesmentStrategy>
                    <Divestment content={[
                        {
                            title: `#LearnWithJoinvest`,
                            content: `Learn with joinvest is a campaign that is created by joinvest for our selected target market with the content related to the investing and financial ratios that are used while investing. The learn with joinvest aims for people to get a little or big investing education through the social media platform
                    `
                        },
                        {
                            title: `#AnalyzeWithJoinvest`,
                            content: `Analyze with joinvest is the next step activity from the learn with joinvest, where here we invite our audiences to analyze their stockpick using the tools that we have been created before
                    `
                        }
                    ]} contentImg="./images/joinvest-content.png" />
                </div>
                <img className="wrapper-bg" src="./images/joinvest-bg.png" />
            </div>
            <Footer />
            <style>{`
        .about-headline {
            position: relative;
            height: 119.75px;
            margin-top: -37px;
          }
          
          .txt-406 {
            position: absolute;
            top: 0px;
            left: 1px;
            font-size: 72px;
            font-family: Gilroy-Black, sans-serif;
            font-weight: undefined;
            color: rgba(255, 255, 255, 1);
            height: 91px;
            word-wrap: break-word;
          }
          
          .txt-101 {
            position: absolute;
            top: 91px;
            left: 0px;
            font-size: 24px;
            font-family: Gilroy-Medium, sans-serif;
            color: rgba(255, 255, 255, 1);
            height: 29px;
            word-wrap: break-word;
          }
          .portfolio-wrapper {
            width:100%;
            position:relative;
            margin-bottom: 106px;
          }
          .wrapper-bg {
            position:absolute;
            right:0px;
            top: 296px;
          }
        `}</style>
        </Layout>
    )
}