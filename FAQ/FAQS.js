import React, {useState} from 'react'

import {faqsData} from './Data'
import FAQ from './FAQ'
import Style from './faqs.module.css'

export default function FAGS() {
    const [faqs, setFaq]=useState(faqsData);
  return (
    <main className={Style.container}>
      <section className={Style.faqs}>
      <h1>FAQs</h1>
        {faqs.map((faq)=> (
          <FAQ key={faq.id} {...faq}/>
          ))}
      </section>
    </main>
  )
}
