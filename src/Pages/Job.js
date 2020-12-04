import { useQuery } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'

const fetchJob = async (key, id) => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
  return res.json()
}

const getDomain = (url) => (new URL(url)).hostname

export default function Job() {
  const { id } = useParams()
  const history = useHistory()
  const handleBackClick = () => history.push('/')

  const { 
    data, status
  } = useQuery(['job', id], fetchJob)

  if (status === 'loading') return <div>Loading data</div>
  if (status === 'error') return <div>Error fetching data</div>

  return (
    <main className="main main--job-detail">
      <div className="container">
        <section className="company">
          <div className="company__logo">
            <img src={data.company_logo} alt="company logo"/>
          </div>
          <h1>{data.company}</h1>
          {/* <p>{getDomain(data.company_url)}</p> */}
          <a href={data.company_url} rel="noreferrer" target="_blank">Company Site</a>
        </section>
        <button
          type="button"
          onClick={handleBackClick}
          className="btn btn--back"
        >Back</button>
      </div>
    </main>
  )
}
