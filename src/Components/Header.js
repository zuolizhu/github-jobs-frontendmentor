import ThemeSwitch from './ThemeSwitch'
import AppLogo from '../Assets/desktop/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={AppLogo} alt="app logo"/>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}
