import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import WwdPreface from '../components/WhatWeDo/WwdPreface'
import WwdItem from '../components/WhatWeDo/WwdItem'

export default function Home() {
    return (
        <Layout>
            <Banner height={461}>
                <div className="breadcrumbs">
                    <p className="txt-862">What We Do</p>
                    <p className="txt-553">Home >> What We Do</p>
                </div>
                <div className='bg-wwd' style={{ backgroundImage: 'url(./images/what-wedo-bg.png)', height: 318, width: 251 }}></div>
            </Banner>
            <div className='container'>
                <WwdPreface />
            </div>
            <div className='container'>
                <div className='container-wrapper'>
                    <WwdItem />
                    <WwdItem
                        bgImage='https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jung0zql22-24%3A1151?alt=media&token=a53e674f-f35e-42e6-a0f6-af9cff266041'
                        tag='Community'
                        content={(
                            <>
                                <p className="txt-827">Joinvest</p>
                                <style jsx>{`
                                    .txt-827 {
                                        font-size: 30px;
                                        font-family: Gilroy-Black, sans-serif;
                                        font-weight: undefined;
                                        color: rgba(11, 43, 64, 1);
                                        width: 342px;
                                        height: 76px;
                                        word-wrap: break-word;
                                        margin-bottom: 18px;
                                        margin-top: 0px;
                                    }
                                    
                                `}</style>
                            </>
                        )}
                    />
                </div>

            </div>
            <Footer />
            <style>{`
            /* Breadcrumbs */
            
            .breadcrumbs {
              position: relative;
              width: 421.5px;
              height: 119.75px;
            }
            .container-wrapper {
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -webkit-flex-direction: row;
                -moz-box-orient: horizontal;
                -moz-box-direction: normal;
                -ms-flex-direction: row;
                flex-direction: row;
                margin-bottom: 157px;
            }
            .container-wrapper .wwd-item:last-child {
                margin-left:15px;
            }
            .txt-862 {
              position: absolute;
              top: -110px;
              left: 1px;
              font-size: 72px;
              font-family: Gilroy-Black, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              width: 420px;
              height: 91px;
              word-wrap: break-word;
            }
            
            .txt-553 {
              position: absolute;
              top: 29px;
              left: 0px;
              font-size: 24px;
              font-family: Gilroy-Medium, sans-serif;
              font-weight: undefined;
              color: rgba(255, 255, 255, 1);
              height: 29px;
              word-wrap: break-word;
            }
            .bg-wwd {
                position: absolute;
                top: 330px;
                right: 0px;
            }
            `}</style>
        </Layout>
    )
}