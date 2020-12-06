import moment from 'moment'
import { useRef } from 'react'
import useJob from '../API/useJob'
import ReactHtmlParser from 'react-html-parser'
import { useParams, useHistory } from 'react-router-dom'
import IconBack from '../Assets/desktop/arrow-left-solid.svg'

const getDomain = (url) => (new URL(url)).hostname

const transform = (node, index) => {
  if (node.type === 'tag' && node.name === 'strong') {
    node.attribs.class = 't-h3'
  }
  if (node.type === 'tag' && node.name === 'p') {
    node.attribs.class = 't-body job-detail__description__body'
  }
  if (node.type === 'tag' && node.name === 'ul') {
    node.attribs.class = 't-body job-detail__description__list'
  }
}

const transformHt = (node, index) => {
  if (node.type === 'tag' && node.name === 'a') {
    node.attribs.class = 't-apply-link how-to-apply__link'
  }
  if (node.type === 'tag' && node.name === 'p') {
    node.attribs.class = 't-body how-to-apply__body'
  }
}

const parserOption = { transform }

const parserHowToApply = { transform: transformHt }

export default function Job() {
  const { id } = useParams()
  const history = useHistory()
  const howToApplyRef = useRef()
  const handleBackClick = () => history.push('/')
  const { status, data, error, isFetching } = useJob(id);
  const handleApplyNowClick = () => howToApplyRef.current.scrollIntoView({ behavior: 'smooth' })
  
  return (
    <main className="main main--job-detail">
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="container">
            <div className="max-width-container">
              <button className="btn btn--back" onClick={handleBackClick}>
                <span className="btn--back__icon">
                  <img src={IconBack} alt="back arrow icon"/>
                </span>
                <span>Back</span>
              </button>
              <section className="company">
                <div className="company__logo">
                  <img src={data.company_logo} alt="company logo"/>
                </div>
                <div className="company__namesite">
                  <h2 className="company__name">{data.company}</h2>
                  <p className="t-light-gray t-body">{getDomain(data.company_url)}</p>
                </div>
                <a className="btn btn--companysite" href={data.company_url} rel="noreferrer" target="_blank">Company Site</a>
              </section>
              <section className="job-detail">
                <div className="job-detail__heading">
                  <div className="job-detail__timetype t-light-gray t-body">
                    <p className="job-detail__time">{moment(new Date(data.created_at)).fromNow()}</p>
                    <div className="spacer-dot"></div>
                    <p className="job-detail__type">{data.type}</p>
                  </div>
                  <h1 className="job-detail__title">{data.title}</h1>
                  <p className="t-location t-violet">{data.location}</p>
                  <button className="btn btn--applynow" onClick={handleApplyNowClick}>Apply Now</button>
                </div>
                <div className="job-detail__description">{ReactHtmlParser(data.description, parserOption)}</div>
              </section>
              <section ref={howToApplyRef} className="how-to-apply">
                <h3 className="t-h3 t-how-to-apply how-to-apply__heading">How to apply</h3>
                {ReactHtmlParser(data.how_to_apply, parserHowToApply)}
              </section>
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </div>
            </div>
          <div className="bottom-title">
            <h2>{data.title}</h2>
            <p className="t-light-gray t-body">{data.company}</p>
            <button className="btn btn--applynow" onClick={handleApplyNowClick}>Apply Now</button>
          </div>
        </>
      )}
    </main>
  );
}
