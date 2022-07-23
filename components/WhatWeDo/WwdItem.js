import React from "react"

export default function WwdItem({
    bgImage = 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g1hdv7oxgkt-256%3A238?alt=media&token=72d400cc-10db-4ea5-9895-3f2889667750', 
    tag = 'Investment',
    content = (
        <>
            <p className="txt-827">Our Investment Strategy</p>
            <p className="txt-113"> > GO THROUGH</p>
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
                  
                  .txt-113 {
                    font-size: 18px;
                    font-family: Gilroy-Medium, sans-serif;
                    font-weight: undefined;
                    color: rgba(0, 0, 0, 1);
                    word-wrap: break-word;
                    margin-top: 0px;
                  }
            `}</style>
        </>
    )
    }) {
    return (
        <div className="wwd-item flex-col-hstart-vstart">
            <div className="group-359" style={{ backgroundImage: `url(${bgImage})`}}>
                <div className="group-175">
                    <p className="txt-639">{tag}</p>
                </div>
            </div>
            <div className="group-2310 flex-col">
                {content}
            </div>
            <style jsx>
                {`
        /* Wwditem */

        p {
          margin: 0;
        }
        
        .flex-col-hstart-vstart {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        
        .flex-col {
          display: flex;
          flex-direction: column;
        }
        
        .wwd-item {
          position: relative;
          width: 531px;
          height: 482.25px;
        }
        
        .group-359 {
          padding: 33px 320px 309px 53px;
          box-sizing: border-box;
          background-size: cover;
          height: 395px;
          width: 100%;
        }
        
        .group-175 {
          padding: 13px 23px 12px 25px;
          box-sizing: border-box;
          border-radius: 7.5px;
          background-color: rgba(255, 255, 255, 1);
          width: 176px;
          height: 100%;
        }
        
        .txt-639 {
          font-size: 21px;
          font-family: Gilroy-Medium, sans-serif;
          font-weight: undefined;
          color: rgba(11, 43, 64, 1);
          word-wrap: break-word;
        }
        
        .group-2310 {
          position: absolute;
          top: 307px;
          none: 0px;
          padding: 31px 34px 28px 44px;
          box-sizing: border-box;
          border-radius: 7.5px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
          width: 429px;
          height: 176px;
          left: 51px;
        }
        
        `}
            </style>
        </div>
    )
}
