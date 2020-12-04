import useStore from '../store'
import { useParams, useHistory } from 'react-router-dom'

export default function Job() {
  const history = useHistory()
  const { id } = useParams()
  const jobs = useStore((state) => state.jobs)
  const handleBackClick = () => history.push('/')

  const getDomain = (url) => (new URL(url)).hostname

  return (
    <main className="main main--job-detail">
      <div className="container">
        <section className="company">
          <div className="company__logo">
            <img src={jobs[id].company_logo} alt="company logo"/>
          </div>
          <h1>{jobs[id].company}</h1>
          <p>{getDomain(jobs[id].company_url)}</p>
          <a href={jobs[id].company_url} rel="noreferrer" target="_blank">Company Site</a>
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
