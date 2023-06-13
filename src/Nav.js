import React, { useState } from 'react'
export const Nav = () => {
    const [show, setShow] = useState(false)
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
                            <a href="#" className="closem">Close</a>
                            <img className="close" src={process.env.PUBLIC_URL + "/close.png"} alt="error" />
                        </li>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About</a> </li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Studies</a></li>
                        <li> <a href="#">Contact</a> </li>
                    </ul> : null
                }
                {/* <button onClick={()=>setShow(true)}>show</button> */}
                {/* <button>Toggle</button> */}
            </label>
        </>
    )
}
