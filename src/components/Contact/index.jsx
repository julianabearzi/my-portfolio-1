import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h2bhv6t',
      'template_hicbrap',
      form.current,
      'TjxyZQhJH3NlDfbFA'
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5 className='title'>Get In Tocuh</h5>
      <h2 className='subtitle'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>julietad299@gmail.com</h5>
            <a href='mailto:julietad299@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Juliana Bearzi</h5>
            <a href='https://www.linkedin.com/in/juliana-bearzi-3176871b7/'>
              Go to profile
            </a>
          </article>
          <article className='contact__option'>
            <FaGithubSquare className='contact__option-icon' />
            <h4>Github</h4>
            <h5>julianabearzi</h5>
            <a href='https://github.com/julianabearzi'>Go to profile</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          ></input>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
          ></input>
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
