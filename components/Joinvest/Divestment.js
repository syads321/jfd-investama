import React from "react"

export default function Divestment({
    content = [
        {
            title:'Divestment',
            content: `We look for the most efficient and optimal way to generate the
            highest return or profit to our dearest shareholders in ascertaining
            their investment, we do invest in hidden gems stocks that we
            carefully select using our methods, our investment will be updated
            regularly through general meetings among shareholders of JFD
            Investama.`
        }, 
        {
            title: `Financial Rigor and Risk Discipline`,
            content: `We do believe the transparency to our dearest shareholders is the
            foundation of trust in JFD Investama, we ensure to create capital
            flexibility and manage risk dynamically, aside we always share
            consistent news and update regarding the invested industries, witha
            comprehensive information to our shareholders.`
        }
    ],
    contentImg = `https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gfh8razzxz9-296%3A162?alt=media&token=eeab2a1c-c151-4f92-bf27-65f0488b43c0`
}) {
    return (
        <>
            <div className="divestment-1 flex-row">
                <img
                    src={contentImg}
                    alt="Not Found"
                    className="image"
                />
                <div className="flex-col content">
                    <div className="divestment flex-col">
                        <div className="title flex-row">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gfh8razzxz9-24%3A2090?alt=media&token=7d914dc2-fdda-46cc-9715-809979535f17"
                                alt="Not Found"
                                className="group-15"
                            />
                            <p className="txt-396">{content[0].title}</p>
                        </div>
                        <p className="txt-416">
                            {content[0].content}
                        </p>
                    </div>
                    <div className="flex-col">
                        <div className="group-595 flex-row-vcenter">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gfh8razzxz9-24%3A2086?alt=media&token=de88e3f6-cd37-4522-a748-6fd275a6fb97"
                                alt="Not Found"
                                className="logo"
                            />
                            <p className="txt-396">{content[1].title}</p>
                        </div>
                        <p className="txt-416">
                            {content[1].content}
                        </p>
                    </div>
                </div>
            </div>
            <style>{`
        /* Divestment1 */

        p {
          margin: 0;
        }
        
        .flex-col {
          display: flex;
          flex-direction: column;
        }
        
        .flex-row {
          display: flex;
          flex-direction: row;
        }
        
        .flex-row-vcenter {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        
        .divestment-1 {
          width: 1071.75px;
          height: 760.5px;
        }
        
        .flex-col.content {
            margin-left: 68px;
            margin-top: 15px;
        }

        .image {
          width: 471px;
          height: 100%;
        }
        
        .divestment {
          margin-bottom: 200px;
          box-sizing: border-box;
          width: fit-content;
        }
        
        .title {
          padding: 0px 280.23px 29.75px 0px;
          margin-bottom: 22px;
          box-sizing: border-box;
          width: fit-content;
          border-bottom: 1px solid rgba(11, 43, 64, 0.3);
        }
        
        .group-15 {
          width: 73.47px;
          height: 52.5px;
          margin-right: 27px;
        }
        
        .txt-396 {
          font-size: 27px;
          font-family: Gilroy-Bold, sans-serif;
          font-weight: undefined;
          color: rgba(11, 43, 64, 1);
          word-wrap: break-word;
          margin-top: 10px;
        }
        
        .txt-416 {
          font-size: 24px;
          font-family: Gilroy-Regular, sans-serif;
          font-weight: undefined;
          line-height: 131%;
          color: rgba(11, 43, 64, 1);
          width: 529px;
          height: 100px;
          word-wrap: break-word;
        }
        
        . {
          width: 100%;
        }
        
        .group-595 {
            padding-bottom: 18px;
            box-sizing: border-box;
            width: fit-content;
            border-bottom: 1px solid rgba(11, 43, 64, 0.3);
            margin-bottom: 20px;
        }
        
        .logo {
          width: 71.25px;
          margin-right: 25px;
          height: 100%;
        }
        
        .txt-396 {
          font-size: 27px;
          font-family: Gilroy-Bold, sans-serif;
          font-weight: undefined;
          color: rgba(11, 43, 64, 1);
          word-wrap: break-word;
        }
        
        .txt-416 {
          font-size: 24px;
          font-family: Gilroy-Regular, sans-serif;
          font-weight: undefined;
          line-height: 131%;
          color: rgba(11, 43, 64, 1);
          width: 529px;
          height: 100px;
          word-wrap: break-word;
        }
        
        `}</style>
        </>

    )
}
