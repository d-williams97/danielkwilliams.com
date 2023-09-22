import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import './Header.css'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div id='headerSocials' className='header__socials'>
        <a href="https://www.linkedin.com/in/daniel-williams-00ba28173/" target='_blank'> <BsLinkedin/> </a>
        <a href="https://github.com/d-williams97" target='_blank'> <BsGithub/></a>
        <a href="#portfolio"> <AiOutlineFolderOpen/> </a>
    </div>
  )
}

export default HeaderSocials