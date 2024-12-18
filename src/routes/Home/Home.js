import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Home.css'

import video from './media/backgroundVideoEdited1.mp4'
import logotype from './media/titodev-logotype.svg'
import photo from './media/photo.png'
import urbanriot from './media/urbanriot.png'
import jda from './media/jda.png'
import smartvice from './media/smartvice.png'
import searchkeer from './media/Searchkeer-screenshot.png'
import mailer4all from './media/Mailer4All-screenshot.png'
import infoip from './media/InfoIP-screenshot.png'
import ubsv from './media/UBSV-screenshot.png'
import sticker from './media/skillsSticker.svg'

import html from './media/icons/1-html5-144.png'
import css from './media/icons/2-css3-144.png'
import javascript from './media/icons/3-javascript-144.png'
import react from './media/icons/4-react-js-144.png'
import liquid from './media/icons/4.1-liquid.png'
import bootstrap from './media/icons/5-bootstrap-144.png'
import tailwind from './media/icons/6-tailwindcss-144.png'

import vscode from './media/icons/7-VSCode-144.png'
import shopify from './media/icons/7.1-shopify-144.png'
import git from './media/icons/8-git-144.png'
import github from './media/icons/9-github-144.png'
import figma from './media/icons/10-figma-144.png'
import ps from './media/icons/11-adobe-photoshop-144.png'
import ai from './media/icons/12-adobe-illustrator-144.png'

import payment from './media/icons/13-payment-96.png'
import storeTheme from './media/icons/14-store-theme-100.png'
import thirdparty from './media/icons/15-3rd-party-connection-64.png'
import domain from './media/icons/16-domain-100.png'
import product from './media/icons/17-product-listing-100.png'
import responsive from './media/icons/18-responsive-64.png'
import design from './media/icons/19-Design-64.png'


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

        <div className="col"></div>
        <div className="col"></div>

        <div className='col' id='col-photo'>
          <img src={photo} alt="profile" />
        </div>

        <div className='col txt'>
          <div id='col-aboutText'>
            <h1>TITO</h1>
            <h2>ANDRADE</h2>
            <p>
              Frontend Developer focused on Shopify, with experience creating and customizing stores using Liquid, integrating applications, configuring payments and shipping, and connecting with apps & external platforms.
              I'm complete self-taught coder with focus on responsive design and Ux/Ui. My goal is to create websites and web applications that respond to current trends in terms of design, performance and best practices.

            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Chat </button></a>
          </div>
        </div>

        <div className="col"></div>
        <div className="col"></div>

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
            <img src={urbanriot} alt="projectPic" />
            <h1>UrbanRiot</h1>
            <h2>Liquid - Shopify</h2>
            <a href='https://urbanriot-store.myshopify.com/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={jda} alt="projectPic" />
            <h1>Jardines de Agua</h1>
            <h2>Liquid - Shopify</h2>
            <a href='https://jardines-de-agua.myshopify.com/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={smartvice} alt="projectPic" />
            <h1>SmartVice</h1>
            <h2>Liquid - Shopify</h2>
            <a href='https://smartvice-store.myshopify.com/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>
    
          <div className='col-2' id='card-1'>
            <img src={searchkeer} alt="projectPic" />
            <h1>SearchKeer</h1>
            <h2>React</h2>
            <a href='https://searchkeer.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={mailer4all} alt="projectPic" />
            <h1>mailer4all</h1>
            <h2>React</h2>
            <a href='https://mailer4all.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={infoip} alt="projectPic" />
            <h1>InfoIp</h1>
            <h2>Javascript</h2>
            <a href='https://info-ip.netlify.app/' target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>

          <div className='col-2' id='card-1'>
            <img src={ubsv} alt="projectPic" />
            <h1>Farah | ubsv</h1>
            <h2>React</h2>
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
              <h3 style={{ textAlign: 'center' }}>Languages & Frameworks</h3>

              <p> <img src={html} alt="" title='Html5'/> Html5</p>
              <p> <img src={css} alt="" title='Css3'/> Css3</p>
              <p> <img src={javascript} alt="" title='Javascript'/> Javascript </p>
              <p> <img src={react} alt="" title='React'/> React </p>
              <p> <img src={liquid} alt="" id='router-icon' title='Liquid' style={{ marginLeft: '0em' }}/> Liquid</p>
              <p> <img src={bootstrap} alt="" title='Bootstrap 5'/> Bootstrap </p>
              <p> <img src={tailwind} alt="" id='router-icon' title='TailwindCss' style={{ marginLeft: '0em' }}/> TailwindCss </p>

            </div>

            {/* TOOLS CARD */}
            <div className="col-4" id='tools-card'>
              
              <h3>Tools</h3>

              <p> <img src={vscode} alt="" title='VsCode'/> VsCode</p>
              <p> <img src={shopify} alt="" title='Shopify'/> Shopify Partners </p>
              <p> <img src={git} alt="" title='Git'/> Git </p>
              <p> <img src={github} alt="" title='GitHub'/> GitHub </p>
              <p> <img src={figma} alt="" title='Figma'/> Figma </p>
              <p> <img src={ps} alt="" title='Adobe Photoshop'/> Adobe Photoshop </p>
              <p> <img src={ai} alt="" title='Adobe Ilustrator'/> Adobe Illustrator </p>

            </div>

            {/* I DO CARD */}
            <div className="col-4" id='tools-card'>

              <h3> Solutions </h3>

              <p> <img src={payment} alt="" title='Payment Gateway Integrations'/> Payment Gateways </p>
              <p> <img src={storeTheme} alt="" title='Shopify Theme Customization'/> Shopify Themes </p>
              <p> <img src={thirdparty} alt="" title='Third-Party App Integrations'/> Third-Party Apps </p>
              <p> <img src={domain} alt="" title='Domain Acquisition and Configuration'/> Domain Configuration </p>
              <p> <img src={product} alt="" title='Product listing'/> Product listing </p>
              <p> <img src={responsive} alt="" title='Responsive Design Implementation'/> Responsive Design </p>
              <p> <img src={design} alt="" title='UX/UI Design'/> UX/UI Design </p>

            </div>
            
        </div>

      </div>

      {/* 04. SERVICES */}
      <div className="row justify-content-center align-items-center" id='row-services'>

        <div className="row justify-content-center align-items-center" id='title-row'>
          <div className='col-1' id='backgroundNumber04'>
            <h1>04.</h1>
          </div>
          <div className='col'>
            <p id='widfy'>Services</p>
            <p id='widfy-2'>This is what I do</p>
          </div>
        </div>
      
        <div className="row justify-content-center align-items-center" id='row-services-cards'>

          <div className='col-2' id='card-2'>
            <h1 id='design'>Shopify Store Development</h1>
            <p>
            Bring your store to life with a customized Shopify site. From structure to aesthetic details, I design user-friendly and visually engaging stores. My experience in Shopify's Liquid templating language allows me to build tailored, scalable solutions that align with your brand and audience. Let’s create an experience that converts.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-2'>
            <h1>Liquid Code Customization</h1>
            <p>            
            Unlock the full potential of Shopify with expert Liquid coding. I specialize in creating dynamic templates, integrating custom features, and optimizing code to enhance functionality without compromising speed or user experience. Whether you need advanced conditional displays, custom sections, or interactive elements, I ensure that every feature is seamlessly integrated.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-2'>
            <h1>Shopify App Integration & Optimization</h1>
            <p>
            Optimize your store with the best Shopify apps, fully customized to meet your needs. I can identify, install, and configure the right apps for your store and integrate them with custom code when necessary to maximize your store’s capabilities. This includes optimizing for performance, ensuring compatibility, and creating a smooth user experience across devices.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-2'>
            <h1>Responsive Design for All Devices</h1>
            <p>
            Ensure your Shopify store looks and works perfectly on any device. I specialize in responsive, mobile-first design to help capture users on every platform. By blending aesthetic design with seamless functionality, I make sure that your customers enjoy a unified experience, whether on desktop, tablet, or mobile.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-2'>
            <h1>SEO & Performance Optimization</h1>
            <p>
            Drive more traffic and improve your store’s performance. I provide on-page SEO enhancements, optimize loading speeds, and refine the backend to meet modern SEO standards, all of which enhance your visibility and usability. With optimized code, your store can rank higher and retain more users, improving conversions.
            </p>
            <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank"><button>Get</button></a>
          </div>

          <div className='col-2' id='card-2'>
            <h1>Ongoing Support & Store Maintenance</h1>
            <p>
            Keep your store running smoothly with continuous support. From regular updates to resolving issues, I offer maintenance services to ensure your Shopify store remains stable, secure, and up-to-date. My support is flexible, adapting to your store’s growth and evolving needs, allowing you to focus on scaling your business.
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

