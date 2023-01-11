import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mayur-sankhala-237530217/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/mayurstwt" target="blank"><FaGithub/></a>
        <a href="https://twitter.com/mayurstwt" target="blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials