import React from "react"

export default function ContactHead() {
  return (
    <div className="contact-head">
      <div className="group-2108 flex-col">
        <p className="txt-867">Contact Us</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ro3i5o1kse-258%3A259?alt=media&token=608aa5fb-420f-4351-a0d5-fd0367fadd29"
          alt="Not Found"
          className="image"
        />
      </div>
      <style jsx>{`
      /* Contacthead */

      p {
        margin: 0;
      }
      
      .flex-col {
        display: flex;
        flex-direction: column;
      }
      
      .contact-head {
        width: 1078.5px;
        height: 127px;
      }
      
      .group-2108 {
        width: 100%;
        height: 100%;
      }
      
      .txt-867 {
        font-size: 72px;
        font-family: Gilroy-Black, sans-serif;
        font-weight: undefined;
        color: rgba(255, 255, 255, 1);
        word-wrap: break-word;
        margin-bottom: 34px;
      }
      
      .image {
        height: 1px;
        width: 100%;
      }
      
      `}</style>
    </div>
  )
}
