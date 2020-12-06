import JobsFilters from '../Components/JobsFilters'
import JobsList from '../Components/JobsList'

export default function Home() {
  
  return (
    <main className="main main--home">
      <div className="container">
        <JobsFilters />
        <JobsList />
      </div>
    </main>
    
  )
}
