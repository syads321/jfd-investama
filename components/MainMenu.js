import React from "react"
import Link from 'next/link'

export default function MainMenu() {
    return (
        <div className="container">
            <div className="group-29">
                <div className="group-9109 flex-row-vend">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8z43kh6suh6-5%3A82?alt=media&token=259fb345-6316-4295-b86f-2e9b28725c18"
                        alt="Not Found"
                        className="asset-11"
                    />
                    <div className="group-22 flex-row">
                        <Link href="/">
                            <a className="txt-829">Home</a>
                         </Link>
                         <Link href="/about">
                         <a className="txt-829">Who We Are</a>
                         </Link>
                        <Link href="/whatwedo">
                        <a className="txt-942">What We Do</a>
                        </Link>
                        <Link href="/news">
                            <a className="txt-599">News</a>
                        </Link>
                        <Link href="/contact">
                        <a className="txt-786">Contact</a>
                        </Link>
                        
                        
                        
                    </div>
                    <div className="group-2 flex-row">
                        <p className="txt-939">Search</p>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8z43kh6suh6-5%3A42?alt=media&token=38c95354-622e-4824-a733-3313ac2c90f6"
                            alt="Not Found"
                            className="ant-design-search-outlined"
                        />
                    </div>
                </div>
                <style jsx>{`
    /* Group29 */

    p {
    margin: 0;
    }
    a {
        text-decoration: none;
    }
    .flex-row-vend {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    }

    .flex-row {
    display: flex;
    flex-direction: row;
    }

    .group-29 {
    padding: 0px 0px 0.25px 0px;
    box-sizing: border-box;
    width: 1080px;
    height: 65.25px;
    }

    .group-9109 {
    width: 100%;
    padding-top: 13px;
    }

    .asset-11 {
    width: 109.5px;
    margin-right: 72px;
    height: 100%;
    margin-top: 13px;
    }

    .group-22 {
    margin-right: 72px;
    box-sizing: border-box;
    height: 33px;
    }

    .txt-829 {
    font-size: 18px;
    font-family: Gilroy-Bold, sans-serif;
    font-weight: undefined;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
    margin-right: 56px;
    }

    .txt-942 {
    font-size: 18px;
    font-family: Gilroy-Bold, sans-serif;
    font-weight: undefined;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
    margin-right: 55px;
    }

    .txt-599 {
    font-size: 18px;
    font-family: Gilroy-Bold, sans-serif;
    font-weight: undefined;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
    margin-right: 57px;
    }

    .txt-786 {
    font-size: 18px;
    font-family: Gilroy-Bold, sans-serif;
    font-weight: undefined;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
    }

    .group-2 {
    padding: 11px 10px 11.25px 24px;
    box-sizing: border-box;
    background-color: rgba(217, 217, 217, 0.3);
    height: fit-content;
    }

    .txt-939 {
    font-size: 18px;
    font-family: Gilroy-Medium, sans-serif;
    font-weight: undefined;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
    margin-right: 104px;
    }

    .ant-design-search-outlined {
    width: 27.75px;
    height: 27.75px;
    }

        `}
                </style>
            </div>
        </div>

    )
}
