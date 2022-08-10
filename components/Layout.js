import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HomeMainContent from '../components/Home/HomeMainContent'
import InvestmentStrategy from '../components/Home/InvestmentStrtegy'
import LatestFromUs from '../components/Home/LatestFromUs'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>JFD Investama | Growing Together</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="./css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>
        <main>
            {children}
        </main>
      <style jsx global>{`
      @font-face{
        font-family: "Gilroy-Black";
        src: url("/fonts/gilroy/Gilroy-Black.ttf") format("truetype");
      }
      @font-face {
        font-family: "Gilroy-Bold";
        src: url("/fonts/gilroy/Gilroy-Bold.ttf") format("truetype");
      }
      @font-face {
        font-family: "Gilroy-Medium";
        src: url("/fonts/gilroy/Gilroy-Medium.ttf") format("truetype");
      }
      @font-face {
        font-family: "Gilroy-Light";
        src: url("/fonts/gilroy/Gilroy-Light.ttf") format("truetype");
      }
      @font-face {
        font-family: "Gilroy-Regular";
        src: url("/fonts/gilroy/Gilroy-Regular.ttf") format("truetype");
      }
      html,body {
        padding:0px;
        margin:0px;
      }
      .container {
        // max-width: 1077px;
        margin: 0px auto;
      }
      .text-center {
        text-align: center;
      }
      `}</style>
    </div>
  )
}
