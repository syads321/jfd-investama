import React from "react"
import Link from 'next/link'

export default function InvestmentStrategy() {
  return (
    <div style={{ paddingBottom: 300 }}>
      <div className="investment-strategy">
        <div className="group-796 container">
          <p className="txt-509">
            Our investment strategy defines our persona and embodies our next
            step in investing
          </p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ac74ymr4q1-244%3A187?alt=media&token=e10133e0-0609-4721-bd21-20b9e9685d21"
          alt="Not Found"
          className="vector"
        />
        <div className="container">
          <div className="row">
            <div className="pull-left col-xs-6 jo-invest">
              <img className="image-bg" src="/images/investment-strategy.jpg"/>
              <Link href="/strategy">
                <div style={{ cursor: 'pointer' }}>
                  <div className="group-276 flex-col">
                    <p className="txt-966">Our Investment Strategy</p>
                    <p className="txt-757">
                      JFD Investama invests in high growth and innovative companies in
                      Indonesia.
                    </p>
                  </div>
                  <p className="txt-1057 flex-hend">More About Us </p>
                </div>
              </Link>
            </div>
            <div className="pull-right col-xs-6 jo-invest">
            <img className="image-bg" src="/images/joinvest-bg.jpg"/>
              <Link href="/joinvest">
                <div style={{ cursor: 'pointer' }}>
                  <div className="group-276 flex-col">
                    <p className="txt-966">Joinvest</p>
                    <p className="txt-757">
                      Focusing on growing the community and quality of content in the
                      social media.
                    </p>
                  </div>
                  <p className="txt-1057 flex-hend">More About Us </p>
                </div>
              </Link>
            </div>
          </div>
        </div>


      </div>
      <style jsx>{`
      /* Investmentstrategy */

      p {
        margin: 0;
      }
      
      .flex-col {
        display: flex;
        flex-direction: column;
      }
      
      .flex-hend {
        justify-content: flex-end;
      }
      
      .investment-strategy {
        position: relative;
        padding: 0px 0px 0.38px 0px;
        box-sizing: border-box;
        // width: 1493.93px;
        // height: 618.38px;
        // margin-top: -22px;
        // pointer-events:none;
        background-color: rgba(11, 43, 64, 1);
        margin-top: 91px;
        padding-top: 45px;
        height: 284px;
      }
      
      .mid-content {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 402px;
        width: 100%;
      }
      
      .group-796 {
        // position: absolute;
        // top: 120px;
        none: 0px;
        // padding: 87px 632px 92px 182px;
        box-sizing: border-box;
        // width: 1442px;
        // height: 282px;
        // width:100%
        border-top: 1px solid #FFF;
      }
      
      .txt-509 {
        font-size: 24px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        // width: 628px;
        height: 103px;
        word-wrap: break-word;
        margin-top: 38px;
        width: 556px;
      }
      
      .vector {
        position: absolute;
        top: 0%;
        bottom: 21.47%;
        right: 0%;
      }
      
      .jo-invest {
        // position: absolute;
        // top: 324px;
        // left: 197px;
        background: linear-gradient(
            0deg,
            rgba(53, 157, 158, 1),
            rgba(53, 157, 158, 1)
          ),
          linear-gradient(0deg, rgba(53, 157, 158, 1), rgba(53, 157, 158, 1));
        width: 514.5px;
        height: 294px;
        position:relative;
        overflow:hidden;
      }
      
      img.image-bg {
        position: absolute;
        width: 102%;
        left: -100%;
        opacity:0;
        transition: all 0.3s ease-out;
      }
      .jo-invest:hover img.image-bg {
        left:0;
        opacity:1;
      }
      .group-276 {
        position: absolute;
        top: 60px;
        none: 0px;
        width: 345px;
        height: 185px;
        left: 59px;
      }
      
      .txt-966 {
        font-size: 30px;
        font-family: Gilroy-Black, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        word-wrap: break-word;
        margin-bottom: 14px;
      }
      
      .txt-1057 {
        position: absolute;
        top: 78.23%;
        bottom: 12.59%;
        left: 30px;
        right: 55.88%;
        font-size: 21px;
        font-family: Gilroy-Black, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        text-align: right;
        width: 169px;
        height: 27px;
        word-wrap: break-word;
      }
      
      .our-invest {
        // position: absolute;
        // top: 324px;
        // left: 732px;
        background: linear-gradient(
            0deg,
            rgba(53, 157, 158, 1),
            rgba(53, 157, 158, 1)
          ),
          url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ac74ymr4q1-20%3A588?alt=media&token=7b3cc425-5a2c-4de4-808b-53b0717b4b03);
        background-size: 100% 100%;
        // width: 514.5px;
        // height: 294px;
      }
      
      .group-124 {
        position: absolute;
        top: 60px;
        none: 0px;
        width: 343px;
        height: 185px;
        left: 53px;
      }
      
      .txt-966 {
        font-size: 30px;
        font-family: Gilroy-Black, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        word-wrap: break-word;
        margin-bottom: 14px;
      }
      
      .txt-757 {
        font-size: 21px;
        font-family: Gilroy-Light, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        width: 343px;
        height: 132px;
        word-wrap: break-word;
      }
      
      .txt-291 {
        // position: absolute;
        // top: 78.23%;
        // bottom: 12.59%;
        // left: 9.91%;
        // right: 57.24%;
        font-size: 21px;
        font-family: Gilroy-Black, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        text-align: right;
        // width: 169px;
        // height: 27px;
        word-wrap: break-word;
        // left: 26px;
      }      
      `}</style>
    </div>
  )
}
