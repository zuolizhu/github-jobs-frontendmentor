import React from 'react'
import useStore from '../store'
import JobCard from './JobCard'
import loadJobs from '../API/loadJobs'
import { motion } from 'framer-motion'
import { useInfiniteQuery } from 'react-query'

export default function JobsList() {
  const {
    data,
    error,
    status,
    fetchMore,
    canFetchMore,
    isFetchingMore,
  } = useInfiniteQuery(
    'jobs',
    async (key, page = 1) => {
      const data = await loadJobs(page)
      return data
    },
    {
      getFetchMore: (lastGroup) => lastGroup.nextPage
    }
  )

  const filterTitle = useStore((state) => state.filterTitle)
  const filterLocation = useStore((state) => state.filterLocation)
  const isFulltimeOnly = useStore((state) => state.isFulltimeOnly)

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  if (status === 'loading') return <div>Loading data</div>
  if (status === 'error') return <div>{error.message}</div>
  
  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="jobslist"
    >
      {data.map((page, i) => (
        <React.Fragment key={i}>
          {page.data
            .filter(({ title }) => title.toLowerCase().includes(filterTitle.toLowerCase()))
            .filter(({ location }) => location.toLowerCase().includes(filterLocation.toLowerCase()))
            .filter(({ type }) => type.toLowerCase().includes(isFulltimeOnly.toLowerCase()))
            .map(job => (
            <JobCard key={job.id} jobDetail={job} />
          ))}
        </React.Fragment>
      ))}
    </motion.div>
    <div className="loadmore-container">
      
      <button
        className="btn btn--loadmore"
        disabled={!canFetchMore || isFetchingMore}
        onClick={() => fetchMore()}
      >{canFetchMore ? 'Load More' : 'No More Jobs'}</button>
    </div>
    
    </>
  )
}
