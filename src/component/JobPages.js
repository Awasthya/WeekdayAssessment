
import {useEffect, useState} from 'react';
import JobCard from './JobCard';
function JobPages() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
  "limit": 10,
  "offset": 0
  });

  const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body
  };
  const [jobs, setJobs] = useState([]);
  const getData = async() => {
    try{
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      console.log(response)
    const totalJobs = await response.json();
    console.log(totalJobs)
    if (response.status !== 200) {
      
      const error = new Error(response.error);
      throw error;
    }
    console.log(totalJobs.jdList)
    setJobs(totalJobs.jdList);
    }catch(error)  {console.error(error)};
  }

  useEffect(()=> {
    console.log('huii');
    getData();
  },[]);

  return (
    <div className="App">
        <div>
            dfx
            {
                jobs.map((job,id)=> {
                    console.log(job);
                    return <JobCard jobid = {job.jdUid}/>
                })
            }
        </div>
    </div>
  );
}

export default JobPages;