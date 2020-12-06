import { useEffect, useState } from 'react'
import JobsFiltersMobile from './JobsFiltersMobile'
import JobsFiltersTablet from './JobsFiltersTablet'

export default function JobsFilters() {
  const [isTablet, setTablet] = useState(window.innerWidth > 767)
  const updateMedia = () => setTablet(window.innerWidth > 767)

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <div className="jobs-filters">
      {isTablet ? (<JobsFiltersTablet />) : (<JobsFiltersMobile />)}
    </div>
  )
}
