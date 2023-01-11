import React from 'react'
import './about.css'
import ME from '../../assets/IMG_-v0ouoq.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {ImBooks} from 'react-icons/im'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
            <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>25+ Completed</small>
            </article>
            <article className='about__card'>
            <ImBooks className='about__icon'/>
                <h5>Education</h5>
                <small>Bachelor's degree</small>
            </article>
          </div>

          <p>
          As a passionate Developer, I was elated to see an good role in your company. I have experience in HTML, CSS, JavaScript, Jquery, Bootstrap, Tailwind, React, Angular, Java, DSA etc. Combined with my recent Freelancing in front-end web development, I am confident I have the skills to help Your Company succeed.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About