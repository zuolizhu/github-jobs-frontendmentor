import { useQuery } from 'react-query'

const getJobById = async (_, jobId) => {
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${jobId}.json`)
  return await data.json()
}

export default function useJob(id) {
  return useQuery(['job', id], getJobById)
}