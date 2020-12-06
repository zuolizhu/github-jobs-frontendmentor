// data back from api need an page id
export default function useJobs() {
  
  const fetchJobs = async (page) => {
    const pageId = parseInt(page) || 1
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${pageId}`)
    const jobs = await res.json()
    const nextPageId = jobs.length === 50 ? page++ : null
    return JSON.stringify({ jobs, nextPageId })
  }

  return { fetchJobs }
}