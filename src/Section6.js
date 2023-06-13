import React from 'react'

export const Section6 = () => {
    return (
        <section className="section6">
            <h1 className="sech"><b>06</b> Contact</h1>
            <div className="boxform">
                <form className="form">
                    <span className="input-span">
                        <label className="fb" htmlFor="text">name</label>
                        <input id="email" name="text" type="text"/></span>
                    <span className="input-span">
                        <label className="fb" htmlFor="email">Email</label>
                        <input id="email" name="email" type="email"/></span>
                    <span className="input-span">
                        <label className="fb" htmlFor="number">phone number</label>
                        <input name="number" type="number"/></span>
                    <span className="span"><a href="#">all informations are protected</a></span>
                    <input value="SUBMIT >" type="submit" className="submit"/>
                        <span className="span">Lorem ipsum dolor, sit a? <a href="#">lorem</a></span>
                </form>
            </div>
        </section>
    )
}
