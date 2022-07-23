import React from "react"

export default function ContactForm() {
  return (
    <div className="contact-form-body">
      <div className="flex-col">
        <p className="txt-228">SEND YOUR MESSAGES</p>
        <p className="txt-846">Don’t hesitate to message us.</p>
        <div className="name">
          <p className="txt-1092">Name*</p>
        </div>
        <div className="email">
          <p className="txt-1092">Email*</p>
        </div>
        <div className="phone">
          <p className="txt-1092">Phone</p>
        </div>
        <div className="subject">
          <p className="txt-1092">Subject</p>
        </div>
        <div className="message">
          <p className="txt-1092">Message</p>
        </div>
        <div className="send-button">
          <p className="txt-675">SUBMIT</p>
        </div>
      </div>
      <style>{`
      /* Contactform */

      p {
        margin: 0;
      }
      
      .flex-col {
        display: flex;
        flex-direction: column;
      }
      
      .contact-form-body {
        padding: 47px 55px 24.75px 41px;
        box-sizing: border-box;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 1);
        width: 351px;
        height: 618.75px;
        margin-top: -258px;
        margin-left: 16px;
      }
      
      .txt-228 {
        font-size: 21px;
        font-family: Gilroy-Black, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 1);
        word-wrap: break-word;
        margin-bottom: 16px;
      }
      
      .txt-846 {
        font-size: 15px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 0.5);
        word-wrap: break-word;
        margin-bottom: 34px;
      }
      
      .name {
        padding: 0px 207px 3.5px 0px;
        margin-bottom: 26px;
        box-sizing: border-box;
        height: 22.5px;
        width: 100%;
      }
      
      .txt-1092 {
        font-size: 15px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 0.5);
        word-wrap: break-word;
      }
      
      .email {
        padding: 0px 211px 3.5px 0px;
        margin-bottom: 25px;
        box-sizing: border-box;
        height: 22.5px;
        width: 100%;
      }
      
      .txt-1092 {
        font-size: 15px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 0.5);
        word-wrap: break-word;
      }
      
      .phone {
        padding: 0px 210px 3.5px 0px;
        margin-bottom: 26px;
        box-sizing: border-box;
        height: 22.5px;
        width: 100%;
      }
      
      .txt-1092 {
        font-size: 15px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 0.5);
        word-wrap: break-word;
      }
      
      .subject {
        padding: 0px 201px 3.5px 0px;
        margin-bottom: 23px;
        box-sizing: border-box;
        height: 22.5px;
        width: 100%;
      }
      
      .txt-1092 {
        font-size: 15px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 0.5);
        word-wrap: break-word;
      }
      
      .message {
        padding: 0px 192px 173px 0px;
        margin-bottom: 25px;
        box-sizing: border-box;
        height: 192px;
        width: 100%;
      }
      
      .txt-1092 {
        font-size: 15px;
        font-family: Gilroy-Medium, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 0.5);
        word-wrap: break-word;
      }
      
      .send-button {
        padding: 12px 44.25px 9.25px 46px;
        box-sizing: border-box;
        background-color: rgba(124, 228, 149, 1);
        height: 41.25px;
        width: fit-content;
      }
      
      .txt-675 {
        font-size: 15px;
        font-family: Gilroy-Bold, sans-serif;
        font-weight: undefined;
        color: rgba(0, 0, 0, 1);
        word-wrap: break-word;
      }
      
      `}</style>
    </div>
  )
}
