import React from "react"

export default function InvesmentStrategy({
    title = 'Our Investment Strategy', 
    children = ' Our investment strategy defines our persona and embodies our next step in investing'
  }) {
  return (
    <div className="invesment-strategy">
      <div className="flex-col">
        <p className="txt-996">{title}</p>
        <p className="txt-476">
          {children}
        </p>
      </div>
      <style>{`
      /* Invesmentstrategy */

      p {
        margin: 0;
      }
      
      .flex-col {
        display: flex;
        flex-direction: column;
      }
      
      .invesment-strategy {
        width: 1078.5px;
        margin-top: 51px;
        margin-bottom: 27px;
      }
      
      .txt-996 {
        font-size: 27px;
        font-family: Gilroy-Bold, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 1);
        word-wrap: break-word;
        margin-bottom: 18px;
      }
      
      .txt-476 {
        font-size: 24px;
        font-family: Gilroy-Regular, sans-serif;
        font-weight: undefined;
        line-height: 131%;
        color: rgba(11, 43, 64, 1);
        width: 1080px;
        word-wrap: break-word;
      }
      
      `}</style>
    </div>
  )
}
