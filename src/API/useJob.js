import { useQuery } from 'react-query'

const getJobById = async (_, jobId) => {
  // const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${jobId}.json`)
  const data = await fetch(`http://localhost:4004/job`)
  return await data.json()
}

export default function useJob(id) {
  return useQuery(['job', id], getJobById)
}