import { useState } from "react"
import { useRouter } from 'next/router';
export default function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter();
    return (
        <>
            <div className="menu-wrapper">
                <div className="wrapper-mobile">
                    <button style={{'float': 'right'}} onClick={() => { !showMenu ? setShowMenu(true) : setShowMenu(false) }}>
                        <img src="/images/mobile-menu.png" />
                    </button>
                </div>
            </div>
            <div className="main-menu">
                {showMenu ? <div className="main-menu">
                    <div className="main-menu-wrapper">
                        <button onTouchStart={() => { setShowMenu(false) }}>
                            <img src="/images/close-menu.png" />
                        </button>
                        <div className="group-753">
                            <a href="/" className={`txt-953 ${router.pathname == "/" ? "active" : ""}`}>Home</a>
                            <a href="/about" className={`txt-953 ${router.pathname == "/about" ? "active" : ""}`}>Who We Are</a>
                            <a href="/whatwedo" className={`txt-953 ${router.pathname == "/whatwedo" ? "active" : ""}`}>What We Do</a>
                            <a href="/contact" className={`txt-953 ${router.pathname == "/contact" ? "active" : ""}`}>Contact</a>
                        </div>
                    </div>

                </div> : null}
            </div>


            <style jsx>{`
                a.active {
                    color: #7ce495 !important;
                    text-decoration: none;
                }
                .main-menu-wrapper {
                    position:relative;
                }
                .menu-wrapper {
                    position: absolute;
                    top: 40px;
                    left: 0px;
                    z-index: 100;
                    width: 100%;
                }
                .menu-wrapper button, .main-menu button {
                    background:none;
                    border:0;
                }
                .main-menu button {
                    position:absolute;
                    right: 20px;
                    top: 20px;
                    display: block;
                    width: 32px;
                    height: 32px;
                }
                .main-menu {
                    position: fixed;
                    right: 40px;
                    top: 40px;
                    background: #0b2b40f5;
                    border-radius: 8px;
                    z-index: 101;
                }
                .group-753 {
                    padding: 80px 101px 20px 40px;
                }
                .group-753 a {
                    display: block;
                    color: #FFF;
                    font-family: 'Gilroy-Bold';
                    font-size: 17px;
                    margin-bottom: 16px;
                }
            `}</style>
        </>
    )
}