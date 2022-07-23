import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import AboutContent from '../components/About/AboutContent'
import AboutMainContent from '../components/About/AboutMainContent'
import AboutOurTeam from '../components/About/AboutOurTeam'

export default function Home() {
  return (
    <Layout>
        <Banner>
        <div className="about-headline">
            <p className="txt-406">Who We Are</p>
            <p className="txt-101">Home  >>  Who We Are</p>
        </div>
        </Banner>
        <div className='container'>
             <AboutContent/>
        </div>
        <AboutMainContent/>
        <AboutOurTeam/>
        <Footer/>
        <style>{`
        .about-headline {
            position: relative;
            height: 119.75px;
            margin-top: -38px;
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
        `}</style>
    </Layout>
  )
}