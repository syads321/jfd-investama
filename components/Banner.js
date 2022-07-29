import React from "react"
import MainMenu from "./MainMenu"
export default function Banner({children, height = 809}) {
    return (
        <div className="bg-image" style={{ background: 'url(./images/banner.jpg)', height:height }}>
            <>
                <MainMenu/>
                <div className="container">
                    <div className="group-28">
                        <div className="group-210">
                            {children}
                        </div>
                    </div>
                </div>
                <style jsx>{`
       /* Group28 */

       p {
         margin: 0;
       }
       
       .flex-col {
         display: flex;
         flex-direction: column;
       }
       
       .flex-col-hstart-vstart {
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
       }
       
       .group-28 {
         height: 354px;
         margin-top: 208px;
       }
       
       .group-210 {
         height: 100%;
       }
       
       .group-3 {
         padding: 0px 180.75px 559.5px 0px;
         box-sizing: border-box;
         width: fit-content;
       }
       
       .group-526 {
         padding: 16px 39px 14px 40px;
         box-sizing: border-box;
         background-color: rgba(124, 228, 149, 1);
         height: 68px;
         width: 100%;
         margin-top:20px;
       }
       
       .txt-2610 {
         font-size: 30px;
         font-family: Gilroy-Bold, sans-serif;
         font-weight: undefined;
         color: rgba(255, 255, 255, 1);
         word-wrap: break-word;
       }
       
      `}</style></>
        </div>
    )
}
