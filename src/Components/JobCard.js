import { Link } from 'react-router-dom'

export default function JobCard({ jobDetail, id }) {
  
  return (
    <div>
      <Link to={`/job/${id}`}>{jobDetail.company}</Link>
    </div>
  )
}
