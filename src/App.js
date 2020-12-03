import './App.scss'
import useStore from './store'
import ThemeSwitch from './Components/ThemeSwitch'

function App() {
  const isLight = useStore((state) => state.isLight)

  return (
    <div className={`App ${isLight ? 'light': 'dark'}`}>
      <button className="btn">button</button>
      <ThemeSwitch />
    </div>
  )
}

export default App
