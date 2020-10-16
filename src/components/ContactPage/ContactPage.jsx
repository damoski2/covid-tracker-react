import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import style from './ContactPage.module.css';
import contactImg from '../../images/contact.jpg';

const ContactPage=()=>{

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })
    
return (
    <section className={style.contact} data-aos={'fade-right'} id="contactus">
        <h1 className={style.H}>Contact Section</h1>
        <hr></hr>
        <div className={style.contactInfo}>
            <h1>Contact us For feedback and report</h1>
            <img src={contactImg}/>
        </div>
        <div className={style.contactForm}>
            <div className={style.Formdiv}>
                <h1>Reach Out to us</h1>
                <form>
                    <div>
                        <label>FirstName</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>LastName</label>
                        <input type="text"  />
                    </div>
                    <div>
                        <label>Phone no</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="email" />
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
    </section>
)
}

export default ContactPage