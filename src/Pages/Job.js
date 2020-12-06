import loadJob from '../API/loadJob'
import { useParams, useHistory } from 'react-router-dom'


const getDomain = (url) => (new URL(url)).hostname

export default function Job() {
  const { id } = useParams()
  const history = useHistory()
  const handleBackClick = () => history.push('/')
  const { status, data, error, isFetching } = loadJob(id);

  return (
    <div>
      <div>
        <button onClick={handleBackClick}>Back</button>
      </div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.id}</h1>
          <div>
            <p>{data.company}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}
