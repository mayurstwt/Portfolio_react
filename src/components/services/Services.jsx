import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            
          </ul>
        </article> */}

        <article className='service'>
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className='service__list'>

            <li><BiCheck className='service__list-icon' />
              <p>I know how to tell your story using proper layout, well-thought navigation,<br /> functionality, and usability and make your product stand out</p></li>
            <li><BiCheck className='service__list-icon' />
              <p>I am a front-end developer experienced in React.js, Angular, Full HTML and CSS <br /> and many other frameworks and libraries shares its accumulated knowledge <br /> in various aspects of front-end development</p></li>
            <li><BiCheck className='service__list-icon' />
              <p>Every company has its own goals for marketing and a variety of items, each of <br />which requires a unique marketing approach. To cater to these demands, we offer<br />
                bespoke web design and web development services that can meet every business</p></li>
            <li><BiCheck className='service__list-icon' />
              <p>The front-end goes far beyond classic graphic design – your app should tell a story.</p></li>
            <li><BiCheck className='service__list-icon' />
              <p>Our clients depend on us to create, develop, and implement web-based solutions <br />that range from robust social applications to sophisticated backend management<br />
                and eCommerce tools.</p></li>
           
          </ul>
        </article>

        {/* <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
            
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services