import { Link } from 'react-router-dom'

export default function JobCard({ jobDetail }) {
  
  return (
    <div>
      <Link to={`/job/${jobDetail.id}`}>{jobDetail.company}</Link>
    </div>
  )
}
