import React, {useState} from 'react'

import Style from "./faq.module.css"

function FAQ({id, title, desc}) {
const [toggle, setToggle]=useState(false);
  return (
    <article className={Style.faq}>
        <div className={Style.faqq}>
            <h4>{title}</h4>
            <button className={Style.button} onClick={()=>(setToggle(!toggle))}>{toggle? '-':'+'}</button>
        </div>
        {toggle && <p style={Style.p}>{desc} <span className={Style.creator}>Build by RK</span></p>}
        
        
    </article>
  )
}

export default FAQ;
