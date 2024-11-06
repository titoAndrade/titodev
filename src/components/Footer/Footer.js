import linkedin from './icons8-linkedin-circled.svg'
import github from './icons8-github-circled.svg'
import logotype from './logotype-footer.svg'

import './Footer.css'

export default function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='row justify-content-center align-items-center'>

        <div className='col' id='icon_col'>
          <a href="https://www.linkedin.com/in/titoandrade-dev/" rel="noreferrer" target="_blank">
            <button>
              <img src={linkedin} alt="Linkedin icon" />
            </button>
          </a>
          <a href="https://github.com/titoAndrade" rel="noreferrer" target="_blank">
            <button>
              <img src={github} alt="Github icon" />
            </button>
          </a>

        </div>

        <div className='col' id='logo_col'>
          <img src={logotype} alt="TitoDev Logo" />
        </div>

        <div className='col' id='company_col'>
          <p>© 2022 - Building cool stuff with 🖤</p>
        </div>
        
      </div>
    </div>
  )
}