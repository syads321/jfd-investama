import Link from 'next/link'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import InvesmentStrategy from '../components/Joinvest/InvestmentStrategy'
import Divestment from '../components/Joinvest/Divestment'
import DealSourcing from '../components/Joinvest/DealSourcing'
import Portfolio from '../components/Joinvest/Portfolio'
import Mobile from './mobile/strategy'

export default function Home() {
  return (
    <Layout mobile={<Mobile/>}>
        <Banner height={462} multiplier={0}>
        <div className="about-headline">
            <p className="txt-406">Our Investment Strategy</p>
            <p className="txt-101"><Link href="/"><a className="breadcrumbs active">Home</a></Link>  >>  <Link href="/whatwedo"><a className="breadcrumbs active">What We Do</a></Link> >> Our Investment Strategy</p>
        </div>
        </Banner>
        <div className="container">
            <InvesmentStrategy/>
            <Divestment/>
            <DealSourcing/>
            
        </div>
        <div className="portfolio-wrapper">
            <div className="container">
                <Portfolio/>
            </div>
            <img className="wrapper-bg" src="./images/joinvest-bg.png"/>
        </div>
        <Footer/>
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
          }
          .wrapper-bg {
            position:absolute;
            right:0px;
            top: -132px;
          }
        `}</style>
    </Layout>
  )
}