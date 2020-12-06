import useStore from '../store'
import { useState } from 'react'
import FilterIcon from '../Assets/mobile/icon-filter.svg'

export default function JobsFiltersMobile() {
  const setFilterTitle = useStore((state) => state.setFilterTitle)
  const setFilterLocation = useStore((state) => state.setFilterLocation)
  const setSsFulltimeOnly = useStore((state) => state.setSsFulltimeOnly)

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false)

  const handleMoreFiltersClick = () => setIsActive(oldIsActive => !oldIsActive)

  const handleFilterFormSubmit = (event) => {
    event.preventDefault()
    setFilterTitle(title)
    setFilterLocation(location)
    if (isFullTimeOnly) {
      setSsFulltimeOnly('full time')
    } else {
      setSsFulltimeOnly('')
    }
    if (isActive) {
      handleMoreFiltersClick()
    }
  }

  return (
    <form className="jobs-filters-form jobs-filters-form--mobile" onSubmit={handleFilterFormSubmit}>
      <div className="input-group">
        <label className="sr-only" htmlFor="filter-by-title">Filter by title</label>
        <input type="text" id="filter-by-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Filter by title..." />
      </div>
      <button onClick={handleMoreFiltersClick} type="button" className="btn btn--more-filters">
        <img src={FilterIcon} alt="filter icon" className="more-filters__icon"/>
      </button>
      {isActive && (
        <div className="jobs-filters-form--mobile__modal">
          <div className="modal__container">
            <div className="input-group--mobile-location">
              <label className="sr-only" htmlFor="filter-by-location">Filter by location</label>
              <input className="input-field--mobile-location" type="text" id="filter-by-location" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Filter by location..." />
            </div>
            <div className="input-group--checkbox">
              <input className="input-field" type="checkbox" id="filter-by-fulltime" checked={isFullTimeOnly} onChange={(event) => setIsFullTimeOnly(event.target.checked)} />
              <div onClick={() => setIsFullTimeOnly(isFulltime => !isFulltime)} className="input-fakebox"></div>
              <label className="t-checkbox-label input-label" htmlFor="filter-by-fulltime">Full Time Only</label>
            </div>
            <div className="form-control">
              <input className="btn btn--search-modal" type="submit" value="Search" />
              <button onClick={handleMoreFiltersClick} className="btn btn--close-modal"></button>
            </div>
          </div>
        </div>
      )}
      <button className="btn btn--search-mobile" type="submit"></button>
    </form>
  )
}
