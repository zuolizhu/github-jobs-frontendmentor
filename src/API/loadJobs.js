export default async function loadJobs(page) {
  const pageId = parseInt(page) || 1
  // const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${pageId}`)
  const response = await fetch(`http://localhost:4004/jobs`)
  const jobs = await response.json()
  const nextPage = jobs.length === 50 ? pageId + 1 : null
  const loadedData = { data: jobs, nextPage }
  return loadedData
}