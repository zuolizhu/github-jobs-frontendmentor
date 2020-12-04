import JobCard from './JobCard'
import useStore from '../store'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useQuery } from 'react-query'

const fetchJobs = async (key, page) => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`)
  const jobs = await res.json()
  
  useStore.setState((state) => ({
    ...state,
    jobs
  }))

  return jobs
}

export default function JobsList() {
  
  const [page, setPage] = useState(1)
  const { 
    data, status
  } = useQuery(['jobs', page], fetchJobs)

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }




  const handleLoadMoreClick = () => setPage(old => old + 1)

  if (status === 'loading') return <div>Loading data</div>
  if (status === 'error') return <div>Error fetching data</div>
  
  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {data.map((job, index) => (
        <JobCard key={job.id} id={index} jobDetail={job} />
      ))}
    </motion.div>
    <h1>{page}</h1>
    <button
      onClick={handleLoadMoreClick}
    >load more</button>
    </>
  )
}
