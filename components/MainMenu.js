import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function MainMenu() {
    const router = useRouter();
    return (
        <div className="container">
            <div className="group-29">
                <div className="group-9109 row">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8z43kh6suh6-5%3A82?alt=media&token=259fb345-6316-4295-b86f-2e9b28725c18"
                        alt="Not Found"
                        className="asset-11 pull-left"
                    />
                    <div className="group-22 pull-left">
                        <Link href="/">
                            <a className={`txt-829 ${router.pathname == "/" ? "active" : ""}`}>Home</a>
                        </Link>
                        <Link href="/about">
                            <a className={`txt-829 ${router.pathname == "/about" ? "active" : ""}`}>Who We Are</a>
                        </Link>
                        <Link href="/whatwedo">
                            <a className={`txt-942 ${["/whatwedo", "/joinvest", "/strategy"].indexOf(router.pathname) !== -1 ? "active" : ""}`}>What We Do</a>
                        </Link>
                        <Link href="/news">
                            <a className={`txt-942 ${router.pathname == "/news" ? "active" : ""}`}>News</a>
                        </Link>
                        <Link href="/contact">
                            <a className={`txt-942 ${router.pathname == "/contact" ? "active" : ""}`}>Contact</a>
                        </Link>
                    </div>
                    <div className="group-2 pull-right">
                        <div className="col-xs-12">
                            <p className="txt-939">Search</p>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8z43kh6suh6-5%3A42?alt=media&token=38c95354-622e-4824-a733-3313ac2c90f6"
                                alt="Not Found"
                                className="ant-design-search-outlined"
                            />
                        </div>
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
    a.active {
        color: hsl(154deg 31% 52% / 86%) !important;
    }
    .flex-row-vend {

    }

    .flex-row {
    // display: flex;
    // flex-direction: row;
    }

    .group-29 {
    padding: 0px 0px 0.25px 0px;
    box-sizing: border-box;
    height: 65.25px;
    }

    .group-9109 {
    width: 100%;
    padding-top: 13px;
    }

    .asset-11 {
    width: 109.5px;
    height: 100%;
    margin-top: 13px;
    }

    .group-22 {
    margin-right: 72px;
    box-sizing: border-box;
    height: 33px;
    margin-left: 72px;
    margin-top: 44px;
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
    margin-top: 32px;
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
    position:absolute;
    top: 0px;
    right: 0px;
    }

        `}
                </style>
            </div>
        </div>

    )
}
