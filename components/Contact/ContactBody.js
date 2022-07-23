import React from "react"
import ContactForm from "./ContactForm"

export default function ContactBody() {
  return (
    <div className="contact-body">
      <div className="group-365 flex-row">
        <div className="contact-office flex-col">
          <div className="group-513 flex-row">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e90lmkv79dt-259%3A261?alt=media&token=9c52ae82-1554-4189-94bc-da8be7c16e13"
              alt="Not Found"
              className="image"
            />
            <p className="txt-034">Virtual Office</p>
          </div>
          <p className="txt-590">Sampoerna Strategic Square</p>
          <p className="txt-928">
            Jl. Jendral Soedirman Kav. 45-46, South Jakarta City, Jakarta
            Indonesia
          </p>
        </div>
        <div className="contact-phone flex-col">
          <p className="txt-224">Quick Contact</p>
          <div className="group-939 flex-row">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e90lmkv79dt-259%3A267?alt=media&token=3d334efd-6a59-4f6e-8345-e8b1c218d875"
              alt="Not Found"
              className="image-1"
            />
            <div className="group-298 flex-col">
              <p className="txt-307">Phone:</p>
              <p className="txt-556">0000-0000-0000</p>
            </div>
          </div>
          <div className="group-365 flex-row">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e90lmkv79dt-259%3A265?alt=media&token=a3020480-2408-4866-b6d1-dbd529a39756"
              alt="Not Found"
              className="image-2"
            />
            <div className="group-298 flex-col">
              <p className="txt-307">Email:</p>
              <p className="txt-556">support@jfd-investama.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper flex-col">
            <ContactForm/>
        </div>
      </div>
      <style>{`
        /* Contactbody */

        p {
          margin: 0;
        }
        
        .flex-row {
          display: flex;
          flex-direction: row;
        }
        
        .flex-col {
          display: flex;
          flex-direction: column;
        }
        
        .contact-body {
          height: 288px;
          margin-top: -383px;
        }
        
        .group-365 {
          width: 100%;
          height: 100%;
        }
        
        .contact-office {
          padding: 34px 17px 42px 36px;
          margin-right: 14px;
          box-sizing: border-box;
          border-radius: 15px;
          background-color: rgba(53, 157, 158, 0.5);
          height: 100%;
        }
        
        .group-513 {
          margin-bottom: 18px;
          box-sizing: border-box;
          width: fit-content;
        }
        
        .image {
          width: 37.5px;
          margin-right: 11px;
          height: 100%;
        }
        
        .txt-034 {
          font-size: 21px;
          font-family: Gilroy-Black, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          word-wrap: break-word;
        }
        
        .txt-590 {
          font-size: 24px;
          font-family: Gilroy-Bold, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          width: 287px;
          height: 42px;
          word-wrap: break-word;
          margin-bottom: 29px;
        }
        
        .txt-928 {
          font-size: 18px;
          font-family: Gilroy-Regular, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          width: 293px;
          height: 85px;
          word-wrap: break-word;
        }
        
        .contact-phone {
          padding: 42px 35px 61px 32px;
          box-sizing: border-box;
          border-radius: 15px;
          background-color: rgba(124, 228, 149, 0.5);
          height: 100%;
        }
        
        .txt-224 {
          font-size: 21px;
          font-family: Gilroy-Black, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          word-wrap: break-word;
          margin-bottom: 17px;
        }
        
        .group-939 {
          margin-bottom: 24px;
          box-sizing: border-box;
          width: fit-content;
        }
        
        .image-1 {
          width: 37.5px;
          height: 39px;
          margin-right: 11px;
        }
        
        .group-298 {
          height: fit-content;
        }
        
        .txt-307 {
          font-size: 18px;
          font-family: Gilroy-Bold, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          word-wrap: break-word;
          margin-bottom: 4px;
        }
        
        .txt-556 {
          font-size: 18px;
          font-family: Gilroy-Medium, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          word-wrap: break-word;
        }
        
        .group-365 {
          width: fit-content;
        }
        
        .image-2 {
          width: 37.5px;
          height: 38px;
          margin-right: 11px;
        }
        
        .group-298 {
          height: fit-content;
        }
        
        .txt-307 {
          font-size: 18px;
          font-family: Gilroy-Bold, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          word-wrap: break-word;
          margin-bottom: 4px;
        }
        
        .txt-556 {
          font-size: 18px;
          font-family: Gilroy-Medium, sans-serif;
          font-weight: undefined;
          color: rgba(255, 255, 255, 1);
          word-wrap: break-word;
        }
        
      `}</style>
    </div>
  )
}
