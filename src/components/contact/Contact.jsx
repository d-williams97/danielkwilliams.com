import React,{useRef} from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_tj6d2cj', 'template_r7coiiq', form.current, 'fGplnxhdyYpKCTYbj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );


      e.target.reset()
  };
  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>

        <div className='contact__options'>
        
          <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:danielkwasi@hotmail.co.uk" target='_blank' rel="">Send a message</a>
          </article>
          { /* 
          <article className='contact__option'>
          <BiMessageRoundedDetail className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Daniel Williams</h5>
            <a href="mailto:danielkwasi@hotmail.co.uk" target='_blank'>Send a message</a>
          </article>
        */}

          <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/daniel-williams-00ba28173/" target='_blank'>View Profile</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Email' required/>
          <textarea name="message"  rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Email</button>
        </form>

      </div>




    </section>
  )
}

export default Contact