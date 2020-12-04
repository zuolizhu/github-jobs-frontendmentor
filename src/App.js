import './App.scss'
import useStore from './store'
import Header from './Components/Header'

// Pages
// Shared Components


function App() {
  const isLight = useStore((state) => state.isLight)

  return (
    <div className={`App ${isLight ? 'light': 'dark'}`}>
      <Header />
    </div>
  )
}

export default App
