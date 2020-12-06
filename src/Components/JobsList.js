import JobCard from './JobCard'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInfiniteQuery } from 'react-query'
import loadJobs from '../API/loadJobs'



export default function JobsList() {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    'jobs',
    async (key, page = 1) => {
      const data = await loadJobs(page)
      console.log('page', page)
      console.log('data', data)
      return data
    },
    {
      getFetchMore: (lastGroup) => lastGroup.nextPage
    }
  )

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  if (status === 'loading') return <div>Loading data</div>
  if (status === 'error') return <div>{error.message}</div>
  
  return (
    <>
    {isFetching && <p>fetching more</p>}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {data.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.map(job => (
            <JobCard key={job.id} jobDetail={job} />
          ))}
        </React.Fragment>
      ))}
    </motion.div>
    <button
      disabled={!canFetchMore || isFetchingMore}
      onClick={() => fetchMore()}
    >load more</button>
    
    </>
  )
}
