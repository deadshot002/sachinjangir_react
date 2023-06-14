
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types'

const Form = props => {
    const a=process.env.REACT_APP_IED_APP;
    const b=process.env.REACT_APP_TEM_APP;
    const c=process.env.REACT_APP_PKEY_APP;
    console.log(c);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm({a},{b}, form.current,{c})
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <section className="section6">
            <h1 className="sech"><b>06</b> Contact</h1>
            <div className="boxform">
            <form ref={form} onSubmit={sendEmail}>
                    <span className="input-span">
                        <label className="fb" htmlFor="text">name</label>
                        <input id="email" name="user_name" type="text" /></span>
                    <span className="input-span">
                        <label className="fb" htmlFor="email">Email</label>
                        <input id="email" name="user_email" type="email" /></span>
                    <span className="input-span">
                        <label className="fb" htmlFor="number">phone number</label>
                        <input name="user_number" type="number" /></span>
                    <span className="span"><a href="#">all informations are protected</a></span>
                    <input value="SUBMIT >" type="submit" className="submit" />
                    <span className="span">Lorem ipsum dolor, sit a? <a href="#">lorem</a></span>
                </form>
            </div>
        </section>
  )
}

Form.propTypes = {}

export default Form