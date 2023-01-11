import React from 'react'
import './experience.css'
import { FaHtml5 } from 'react-icons/fa'
import { SiCss3 } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaAngular } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { SiJquery } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { MdComputer } from 'react-icons/md'
import { BiGitRepoForked } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiFillGitlab } from 'react-icons/ai'
import { FaPhp } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiTailwindcss } from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 classname='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 classname='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript classname='experience__details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJquery classname='experience__details-icon' />
              <div>
              <h4>Jquery</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap classname='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss classname='experience__details-icon' />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact classname='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAngular classname='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFirebase classname='experience__details-icon' />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaJava classname='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdComputer classname='experience__details-icon' />
              <div>
              <h4>DSA</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiGitRepoForked classname='experience__details-icon' />
              <div>
              <h4>Git</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsGithub classname='experience__details-icon' />
              <div>
              <h4>Github</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillGitlab classname='experience__details-icon' />
              <div>
              <h4>Gitlab</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaPhp classname='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql classname='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>









        {/* <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 classname='experience__details-icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHtml5 classname='experience__details-icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHtml5 classname='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHtml5 classname='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHtml5 classname='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience