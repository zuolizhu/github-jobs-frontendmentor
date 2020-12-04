import { AnimatePresence } from 'framer-motion'
import { MountTransition } from './MountTransition'
import { Route, Switch, useLocation } from 'react-router-dom'

export const RouteTransition = ({
  children,
  exact = false,
  path,
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <Route exact={exact} path='/' {...rest}>
  <MountTransition slide={slide} slideUp={slideUp}>
    {children}
  </MountTransition>
</Route>
)

export const AnimatedRoutes = ({
  children,
  exitBeforeEnter = true,
  initial = false,
}) => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  )
}