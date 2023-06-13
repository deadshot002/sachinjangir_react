import React from 'react'

export const Head = () => {
  const a=<b>SCHIN</b>
  const text="    < Hii, >  \n    < I am ";
  const text2=" jangir, >  \n     < Data analysis >"
  return (
    <div>
      <div className="imp">
        <img className="impimg" src={process.env.PUBLIC_URL + "/sachin.jpeg"} alt="" />

        <div className="nav1">
          <pre className="nav2">
            {text}{a}{text2}
          </pre>
        </div>
        <button className='resume'>RESUME</button>
        <div className="skillicon skillicon1"><img src= {process.env.PUBLIC_URL + "/powerpoint2.png"}  alt="" /></div>
        <div className="skillicon skillicon2"><img src={process.env.PUBLIC_URL + "/excel.png"}  alt="" /></div>
        <div className="skillicon skillicon3"><img src={process.env.PUBLIC_URL + "/sql-server.png"}  alt="" /></div>
        <div className="skillicon skillicon4"><img src={process.env.PUBLIC_URL +  "/python.png"} alt="" /></div>
        <div className="skillicon skillicon5"><img src={process.env.PUBLIC_URL + "/AutoCAD.png"}  alt="" /></div>
        <div className="skillicon skillicon6"><img src={process.env.PUBLIC_URL + "/photoshop.png"} alt="" /></div>
      </div>
    </div>
  )
}
