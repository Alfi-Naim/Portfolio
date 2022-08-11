import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { contact } from '../../utils/constants'

function Contact() {

    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_d49f0on', 'template_nj5e9d3', form.current, 'DQ95ItFvPr34gtTXx')
            .then((result) => {
                form.current.reset();
                console.log(result.text);
                alert("Thank you! , We appreciate your time");
            })
            .catch((error) => {
                console.log(error.text);
                alert("Sorry some error occurred try, again");
            })  
            .finally(() => setLoading(false));
    };

    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">{contact.title}</h2>
            <p className="contact__text">{contact.text}</p>
            <form ref={form} onSubmit={sendEmail} className='contact__form'>
                <input className='contact__input' placeholder='Name' type='text' name="name" />
                <input className='contact__input' placeholder='Email' type='email' name="email" />
                <textarea className='contact__textarea' placeholder='Message' type='text' maxLength="200" rows="5" name="message" />
                <button className='contact__button' >{loading ? 'Loading...' : 'Email me'}</button>
            </form>
        </section>
    );
}

export default Contact;
