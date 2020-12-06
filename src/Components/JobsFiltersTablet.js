import useStore from '../store'
import { useState } from 'react'

export default function JobsFiltersTablet() {
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false)
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')

  const setFilterTitle = useStore((state) => state.setFilterTitle)
  const setFilterLocation = useStore((state) => state.setFilterLocation)
  const setSsFulltimeOnly = useStore((state) => state.setSsFulltimeOnly)

  const handleSearchClick = (event) => {
    event.preventDefault()
    setFilterTitle(title)
    setFilterLocation(location)
    if (isFullTimeOnly) {
      setSsFulltimeOnly('full time')
    } else {
      setSsFulltimeOnly('')
    }
    
  }
  return (
    <div className="jobs-filters-form">
      <form className="jobs-filters-form--tablet">
        <div className="input-group input-group--title">
          <label className="sr-only" htmlFor="title">title</label>
          <input id="title" placeholder="Filter by title, companies, expertise…" value={title} onChange={(event) => setTitle(event.target.value)} type="text"/>
        </div>
        <div className="input-divider"></div>
        <div className="input-group input-group--location">
          <label className="sr-only" htmlFor="location">location</label>
          <input id="location" placeholder="Filter by location..." value={location} onChange={(event) => setLocation(event.target.value)} type="text"/>
        </div>
        <div className="input-divider"></div>
        <div className="input-group--checkbox">
          <input className="input-field" type="checkbox" id="filter-by-fulltime" checked={isFullTimeOnly} onChange={(event) => setIsFullTimeOnly(event.target.checked)} />
          <div onClick={() => setIsFullTimeOnly(isFulltime => !isFulltime)} className="input-fakebox"></div>
          <label className="t-checkbox-label input-label" htmlFor="filter-by-fulltime">Full Time Only</label>
        </div>
        <button onClick={handleSearchClick} className="btn btn--search-tablet" type="submit">Search</button>
      </form>
    </div>
  )
}
