
import {useEffect, useState} from 'react';
import JobCard from './JobCard';
import './JobStyle.css'
function JobPages(props) {
    const propsJob = props.jobs;
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
    if(propsJob != []){
        setJobs(propsJob);
    }
  },[propsJob])
  useEffect(()=> {
    console.log('huii');
    getData();
  },[]);

  return (
    <div className="App">
        <div class='cardOuter'>
            {
                jobs?.map((job,id)=> {
                    return <JobCard jobid = {job.jdUid} jobLogo= {job.logoUrl} companyName = {job.companyName} jobRole = {job.jobRole}
                    location = {job.location} maxSalary = {job.maxJdSalary} minSalary= {job.minJdSalary} minExp = {job.minExp}
                    jobDesc = {job.jobDetailsFromCompany}/>
                })
            }
        </div>
    </div>
  );
}

export default JobPages;