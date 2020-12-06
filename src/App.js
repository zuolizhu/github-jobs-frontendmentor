import './App.scss'
import useStore from './store'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatedRoutes, RouteTransition } from './Components/RouteTransition'
// Pages
import Job from './Pages/Job'
import Home from './Pages/Home'

// Shared Components
import Header from './Components/Header'

const queryCache = new QueryCache()

function App() {
  const isLight = useStore((state) => state.isLight)
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
      <div className={`App ${isLight ? 'light': 'dark'}`}>
        <Header />
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <RouteTransition exact path="/" slideUp={50}>
            <Home />
          </RouteTransition>
          <RouteTransition exact path="/job/:id" slideUp={50}>
            <Job />
          </RouteTransition>
        </AnimatedRoutes>
      </div>
      </ReactQueryCacheProvider>
    </Router>
  )
}

export default App
