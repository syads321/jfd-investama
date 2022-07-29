import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ContactHead from '../components/Contact/ContactHead'
import ContactBody from '../components/Contact/ContactBody'
import ContactForm from '../components/Contact/ContactForm'

export default function Home() {
    return (
        <Layout>
            <Banner>
                <div className="contact-head">
                    <div className="group-773 flex-col">
                        <p className="txt-119">Contact Us</p>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t9uy8i6g83-258%3A259?alt=media&token=87659259-6aa3-4308-9a98-aadc1d3996d2"
                            alt="Not Found"
                            className="image"
                        />
                    </div>
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
                  max-width: 1078.5px;
                  height: 127px;
                  margin-top: -39px;
                }
                
                .group-773 {
                  width: 100%;
                  height: 100%;
                }
                
                .txt-119 {
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
            </Banner>
            <div className='container'>
                <ContactBody />
            </div>
            <Footer />
        </Layout>
    )
}