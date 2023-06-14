import React, { useState } from 'react'
import { useRef } from 'react';
export const Nav = () => {
    let k = false
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    let a = windowSize.current[0];
    if (a > 768) {
        k = true;
    }

    const handleRef = (param) => window.scrollTo(0, param);

    const [show, setShow] = useState(k)
    return (
        <>
            <button onClick={() => setShow(!show)} className='hamburger'>
                <img className="hamb" src={process.env.PUBLIC_URL + "/hamburger.png"} alt="." />
            </button>
            <label className="label">
                <input type="checkbox" />
                {
                    show ? <ul>
                        <li onClick={() => setShow(!show)} className="hamburger">
                            Close
                            <img className="close" src={process.env.PUBLIC_URL + "/close.png"} alt="error" />
                        </li>
                        <li onClick={() => handleRef(500)}> Home </li>
                        <li onClick={() => handleRef(1050)}>About</li>
                        <li onClick={() => handleRef(1600)}>Work</li>
                        <li onClick={() => handleRef(3250)}>Studies</li>
                        <li onClick={() => handleRef(7000)}>Contact</li>
                    </ul> : null
                }
                {/* <button onClick={()=>setShow(true)}>show</button> */}
                {/* <button>Toggle</button> */}
            </label>
            <button onClick={() => handleRef(0)} className='top'><svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
            </svg></button>
        </>
    )
}
