import JobCard from './JobCard'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInfiniteQuery } from 'react-query'



export default function JobsList() {
  
  const [page, setPage] = useState(-1)

  const fetchJobs = async (page) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`)
    const jobs = await response.json()
    console.log('fetched data', jobs)
    return jobs
  }
 
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
      const data = await fetchJobs(page)
      // check if data 
      if (data.length === 50) {

      }
      console.log(data)
      return data
    },
    {
      getFetchMore: page => page
    }
  )

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }


  const handleLoadMoreClick = () => setPage(old => old + 1)

  if (status === 'loading') return <div>Loading data</div>
  if (status === 'error') return <div>{error.message}</div>
  
  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {data.map((page, i) => (
        <React.Fragment key={i}>
          {page.map(job => (
            <JobCard key={job.id} jobDetail={job} />
          ))}
        </React.Fragment>
      ))}
    </motion.div>
    <h1>{page}</h1>
    <button
      onClick={handleLoadMoreClick}
    >load more</button>
    </>
  )
}
