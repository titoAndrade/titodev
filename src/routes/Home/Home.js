import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Home.css'

import video from './media/backgroundVideoEdited1.mp4'
import logotype from './media/titodev-logotype.svg'
import photo from './media/photo.png'
import searchkeer from './media/searchkeer.svg'
import mailer4all from './media/mailer4all.svg'
import infoip from './media/infoip.svg'
import ubsv from './media/ubsv.svg'
import sticker from './media/skillsSticker.svg'

import html from './media/icons/icons8-html-5.svg'
import css from './media/icons/icons8-css3.svg'
import javascript from './media/icons/icons8-javascript-logo.svg'

import react from './media/icons/icons8-react.svg'
import router from './media/icons/react-router.svg'
import jquery from './media/icons/icons8-jquery.svg'

import bootstrap from './media/icons/icons8-bootstrap.svg'
import tailwind from './media/icons/icons8-tailwind-css.svg'
import sass from './media/icons/sass.svg'

import vscode from './media/icons/icons8-visual-studio.svg'
import git from './media/icons/icons8-git.svg'
import github from './media/icons/icons8-github.svg'
import figma from './media/icons/icons8-figma.svg'
import ps from './media/icons/icons8-adobe-photoshop.svg'
import ai from './media/icons/icons8-adobe-illustrator.svg'

import design from './media/icons/icons8-windows-10-personalization-50.png'
import mockup from './media/icons/icons8-mock-up-66.png'
import responsive from './media/icons/responsive.svg'
import uxui from './media/icons/icons8-ux-design-66.png'
import deploy from './media/icons/icons8-netlify.png'


export default function Home() {
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_nn3xtto', 'template_rkqppz9', form.current, 'yU_ce4p04RlrLWunW')
      .then((result) => {
          alert('Message sent succesfully')
      }, (error) => {
          alert(error.message)
      })
      e.target.reset()
  }
  
  return (
    
    <div className='' id='homeContainer'>

      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted >
        <source src={video} type='video/mp4'/>
      </video>

      {/* 00. HERO */}
      <div className='row justify-content-center align-items-center' id='row-logo'>
        <div className='col' id='logo'>
          <img src={logotype} alt="logotype" />
        </div>
      </div>

      {/* 01. ABOUT */}
      <div className='row justify-content-center align-items-center' id='row-about'>

        <h1 id='backgroundNumber'>01.</h1>

        <p id='backgroundText'>
          I am a self-taught frontend developer with focus on responsive design and ux/ui with knowledge of Apis queries.
          My goal is to create websites and web applications that respond to current trends in terms of design, performance and best practices. 
        </p>

        <div className='col' id='col-photo'>
          <img src={photo} alt="profile" />
        </div>

        <div className='col txt'>
          <div id='col-aboutText'>
            <h1>TITO</h1>
            <h2>ANDRADE</h2>
            <p>
              I am a self-taught frontend developer with focus on responsive design and Ux/Ui.
              My goal is to create websites and web applications that respond to current trends in terms of design, performance and best practices.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>more +</button></a>
          </div>
        </div>

      </div>

      {/* 02. WORK */}
      <div className="row justify-content-center align-items-center" id='row-work'>

        <div className="row justify-content-center align-items-center" id='title-row'>
          <div className='col-1' id='backgroundNumber02'>
            <h1>02.</h1>
          </div>
          <div className='col' id='workTitle'>
            <p>My Work</p>
          </div>
        </div>
      
        <div className="row justify-content-center align-items-center" id='row-work-cards'>
    
          <div className='col-2' id='card-1'>
            <img src={searchkeer} alt="projectPic" />
            <h1>SearchKeer</h1>
            <p>This is a Web App that allows you to find quality photos from the unsplash API for free</p>
            <a href='https://searchkeer.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={mailer4all} alt="projectPic" />
            <h1>mailer4all</h1>
            <p>An app that allows you to send emails from a web platform without the need to log in</p>
            <a href='https://mailer4all.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={infoip} alt="projectPic" />
            <h1>InfoIp</h1>
            <p>This App allows you to check suspicious ip addresses and information about it</p>
            <a href='https://info-ip.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={ubsv} alt="projectPic" />
            <h1>Farah | ubsv</h1>
            <p>web site developed to promote the brand of cheese boards, bakery and wines </p>
            <a href='https://farah-ubsv.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

        </div>
      
      </div>

      {/* 03. SKILLS */}
      <div className='row justify-content-center align-items-center' id='row-skills'>

        <div className="row justify-content-left align-items-center" id='row-sticker'>
          <div className='col' id='backgroundNumber03'>
            <h1>03.</h1>
          </div>
        </div>

        <div className="row justify-content-center align-items-center" id='row-sticker'>
          <img src={sticker} alt="sticker Title" />
        </div>

        <div className="row justify-content-center align-items-center" id='row-backgroundSkills'>

            {/* SKILLS CARD */}
            <div className="col-4">

              {/* LANGUAGES */}
              <h3 style={{ textAlign: 'center' }}>Languages</h3>
              <div className="row justify-content-center align-items-center">
                <div className="col-3" id='html'>
                  <img src={html} alt="" title='Html5'/>
                </div>

                <div className="col-3" id='css'>
                  <img src={css} alt="" title='Css3'/>
                </div>

                <div className="col-3">
                  <img src={javascript} alt="" title='Javascript'/>
                </div>
              </div>

              {/* FRAMEWORK & LIBRARIES*/}
              <h3 style={{ textAlign: 'center' }}>Frameworks & Libraries</h3>
              <div className="row justify-content-center align-items-center">
                <div className="col-5" id='react' style={{ marginTop: '0.5em', marginLeft: '0.5em', textAlign: 'center' }}>
                  <img src={react} alt="" title='React'/>
                </div>

                <div className="col-5">
                  <img src={router} alt="" id='router-icon' title='React-Router'/>
                </div>

                <div className="col-3">
                  <img src={jquery} alt="" title='jQuery' style={{ display: 'none' }}/>
                </div>
              </div>
              
              <div className="row justify-content-center align-items-center">
                <div className="col-5">
                  <img src={bootstrap} alt="" title='Bootstrap 5' style={{ marginLeft: '1.5em', textAlign: 'center' }}/>
                </div>

                <div className="col-5" id='tailwind'>
                  <img src={tailwind} alt="" id='router-icon' title='TailwindCss' style={{ marginLeft: '0em' }}/>
                </div>

                <div className="col-3">
                  <img src={sass} alt="" title='Sass' style={{ display: 'none' }}/>
                </div>
              </div>

            </div>

            {/* TOOLS CARD */}
            <div className="col-4" id='tools-card'>
              
              <h3>Tools</h3>

              <div className="row justify-content-center align-items-center">
                <div className="col-3">
                  <img src={vscode} alt="" title='VsCode'/>
                </div>
                <div className="col-3">
                  <img src={git} alt="" title='Git'/>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-3" id='github'>
                  <img src={github} alt="" title='GitHub'/>
                </div>
                <div className="col-3">
                  <img src={figma} alt="" title='Figma'/>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-3">
                  <img src={ps} alt="" title='Adobe Photoshop'/>
                </div>
                <div className="col-3">
                  <img src={ai} alt="" title='Adobe Ilustrator'/>
                </div>
              </div>

            </div>

            {/* I DO CARD */}
            <div className="col-4" id='tools-card'>

            <h3>I do</h3>

            <div className="row justify-content-center align-items-center">
              <div className="col-3">
                <img src={design} alt="" title='Design'/>
              </div>
              <div className="col-3">
                <img src={mockup} alt="" title='MockUp'/>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-3">
                <img src={responsive} alt="" title='Responsive'/>
              </div>
              <div className="col-3" id='uxui'>
                <img src={uxui} alt="" title='UX/UI'/>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-3">
                <img src={deploy} alt="" title='Deployment & Hosting'/>
              </div>
            </div>

            </div>
            
        </div>

      </div>

      {/* 04. SERVICES */}
      <div className="row justify-content-center align-items-center" id='row-services'>

        <div className="row justify-content-center align-items-center" id='title-row'>
          <div className='col-1' id='backgroundNumber04'>
            <h1>04.</h1>
          </div>
          <div className='col' id='workTitle'>
            <p id='widfy'>what I do</p>
          </div>
        </div>
      
        <div className="row justify-content-center align-items-center" id='row-services-cards'>
    
          <div className='col-2' id='card-2'>
            <h1 id='design'>Design</h1>
            <p>
              From a basic design using bootstrap or tailwind components to a professional design by my partners graphic designers, you can find the service that best fits your needs.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-1'>
            <h1>Develop</h1>
            <h2 id='development'>ment</h2>
            <p>            
              Scalable websites using react in its development, use of the most popular libraries on the market with fast loading, implementation of effective forms and attention to SEO
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-2'>
            <h1>Hosting</h1>
            <p>
              Deployment service, domain, hosting in one of the best platforms on the market adjusted to your traffic needs, I also offer the maintenance service of your website
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

        </div>
      
      </div>

      {/* 05. CONTACT */}
      <div className="row justify-content-center align-items-center" id='row-contact'>

        <div className="row justify-content-center align-items-center" id='title-row'>
          <div className='col-1' id='backgroundNumber05'>
            <h1>05.</h1>
          </div>
          <div className='col' id='workTitle'>
            <p>Contact me</p>
          </div>
        </div>

        <div className="row justify-content-center align-items-center" id='row-form'>
          {/* F O R M */}
          <form id='form' ref={form} onSubmit={sendEmail} class="row justify-content-center">
            
            <div className="row justify-content-center">
              <div className="col">
                <h6>Name</h6>
                <input type="text" name="user_name" className="inputs" placeholder="Your name" title='please enter your name' required={true}/>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col">
                <h6>Email</h6>
                <input type="email" name="user_email" className="inputs" placeholder="name@example.com" required={true}/>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col">
                <h6>Message</h6>
                <textarea className="inputs" name="message" placeholder="Write something..." required={true}></textarea>
              </div>
            </div>
            
            <div className='row justify-content-center'>
              <button className="" type="submit" value="Send">Send</button>
            </div>
            
          </form>
        </div>

      </div>

    </div>
  )
}

