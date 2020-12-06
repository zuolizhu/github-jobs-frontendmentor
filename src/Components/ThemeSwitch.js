import useStore from '../store'
import IconSun from '../Assets/desktop/icon-sun.svg'
import IconMoon from '../Assets/desktop/icon-moon.svg'

export default function ThemeSwitch() {
  const isLight = useStore((state) => state.isLight)
  const setIsLight = useStore((state) => state.setIsLight)
  const handleThemeSwitchClick = () => setIsLight(!isLight)

  return (
    <div className="theme-switch">
      <div className="theme-switch__icon">
        <img src={IconSun} alt="theme switch icon"/>
      </div>
      <button
        aria-label="Theme Switcher"
        onClick={handleThemeSwitchClick}
        className={`btn btn--theme-switch${isLight ? '' : ' dark'}`}>
          <span className="btn--theme-switch__dot"></span>
        </button>
      <div className="theme-switch__icon">
        <img src={IconMoon} alt="theme switch icon"/>
      </div>
    </div>
  )
}
