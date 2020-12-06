import moment from 'moment'
import { Link } from 'react-router-dom'
import LogoPlaceHolder from '../Assets/desktop/logo-placeholder.svg'

export default function JobCard({ jobDetail }) {
  
  return (
      <Link className="jobcard" to={`/job/${jobDetail.id}`}>
        <div className="jobcard__logo">
          <img src={jobDetail.company_logo || LogoPlaceHolder} alt="company logo"/>
        </div>
        <div className="jobcard__timetype t-light-gray t-body">
          <p className="jobcard__time">{moment(new Date(jobDetail.created_at)).fromNow()}</p>
          <div className="spacer-dot"></div>
          <p className="jobcard__type">{jobDetail.type}</p>
        </div>
        <h3 className="jobcard__title t-h3">{jobDetail.title}</h3>
        <p className="jobcard__company t-light-gray t-body">{jobDetail.company}</p>
        <p className="jobcard__location t-violet t-location">{jobDetail.location}</p>
      </Link>
  )
}
