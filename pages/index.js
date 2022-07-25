import Link from 'next/link'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HomeMainContent from '../components/Home/HomeMainContent'
import InvestmentStrategy from '../components/Home/InvestmentStrtegy'
import LatestFromUs from '../components/Home/LatestFromUs'

export default function Home() {
  return (
    <Layout>
      <Banner>
        <p className="txt-823">Growing Together</p>
        <p className="txt-1110">
          We focus on finding the wonderful yet undervalue company in the
          financial market.
        </p>
        <div className="group-3 flex-col-hstart-vstart">
          <div className="learn-more flex-col-hstart-vstart">
          <Link href="/about"><p className="txt-954">Learn More</p></Link>
          </div>
        </div>
      </Banner>
      <HomeMainContent />
      <InvestmentStrategy />
      <LatestFromUs />
      <Footer />
      <style>{`
         .txt-823 {
          font-size: 84px;
          font-family: Gilroy-Black, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          width: 856px;
          height: 106px;
          word-wrap: break-word;
          margin-bottom: 20px;
          margin-top: 0px;
        }
        
        .txt-1110 {
          font-size: 30px;
          font-family: Gilroy-Medium, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          width: 765px;
          height: 89px;
          word-wrap: break-word;
          margin-bottom: 71px;
          margin-top: 0px;
        }
        
        /* Learnmore */

          .learn-more {
            padding: 15.25px 37.75px 13.5px 39.25px;
            box-sizing: border-box;
            background-color: rgba(124, 228, 149, 1);
            width: 235.5px;
            height: 68.25px;
          }

          .txt-954 {
            font-size: 30px;
            font-family: Gilroy-Bold, sans-serif;
            font-weight: undefined;
            color: rgba(255, 255, 255, 1);
            word-wrap: break-word;
            margin-top: 0px;
            cursor:pointer;
          }

      `}</style>
    </Layout>
  )
}
