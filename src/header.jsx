import './style.css'
/*import wgaf from './images/WGAF.png'
import qhh from '/src/images/QHHBLACK.png'*/
import ProfileButton from './auth/account.jsx'

function Header() {

  const logoSrc = '/src/images/QHHBLACK.png'
  return (
    <header id="Header">
      <div className="header-container flex flex-row items-center justify-between p-4">
        <img src={logoSrc} className="h-12 logo"/>
        <ProfileButton className=""/>
      </div>
    </header>
  )
}

export default Header
