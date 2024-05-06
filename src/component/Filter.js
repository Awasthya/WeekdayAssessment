import React, { useEffect, useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";

import JobPages from './JobPages';
import './filter.css';
const Filter = (props) => {
    const jobs = props.jobs;
    const [filterJobs,setFilterJob] = useState();
const [selectedFlavors, setSelectedFlavors] = useState([]);
const selectedFilter = [];
  const RoleOptions = [
    { value: "Role", key: "backend" },
    { value: "Role", key: "frontend" },
    { value: "Role", key: "android" },
    { value: "Role", key: "ios" },
    { value: "Role", key: "flutter" },
    { value: "Role", key: "fullstack" }
  ];
  const NoOfEmpOptions = [
    { value: "1-10", key: "1-10" },
    { value: "11-20", key: "21-50" },
    { value: "51-100", key: "51-100" },
    { value: "101-200", key: "101-200" },
    { value: "201-500", key: "201-500" },
    { value: "500+", key: "500+" }
  ];
  const Experience = [
    { value: "maxExp", key: "1" },
    { value: "maxExp", key: "2" },
    { value: "maxExp", key: "3" },
    { value: "maxExp", key: "4" },
    { value: "maxExp", key: "5" },
    { value: "maxExp", key: "6" },
    { value: "maxExp", key: "7" },
    { value: "maxExp", key: "8" },
    { value: "maxExp", key: "9" },
    { value: "maxExp", key: "10" },
  ];
  const JobType = [
    { value: "Remote", key: "Remote" },
    { value: "Hybrid", key: "Hybrid" },
    { value: "In-Office", key: "In-Office" },
  ];
  const MinPaySalary = [
    { value: "minJdSalary", key: 10 },
    { value: "minJdSalary", key: 20 },
    { value: "minJdSalary", key: 30 },
    { value: "minJdSalary", key: 40 },
    { value: "minJdSalary", key: 50 },
    { value: "minJdSalary", key: 60 },
    { value: "minJdSalary", key: 70 },
  ];
  const onSelect = (e) => {
    setSelectedFlavors(e);
    //console.log(e)    
    const tempFilterJob = [];
    const filtered = selectedFlavors.filter((flavors) => {
        return jobs.filter((job) => {
            console.log(job.maxExp, flavors.key)
                if(flavors.value === 'Role'){
                    if(job.jobRole === flavors.key){
                        tempFilterJob.push(job);
                    }
                }else if(flavors.value === 'maxExp'){
                    if(job.maxExp == flavors.key){
                        tempFilterJob.push(job);
                    }
                }else if(flavors.value === 'minJdSalary'){
                    if(job.minJdSalary >= flavors.key){
                        tempFilterJob.push(job);
                    }
                }
        })
    })
    setFilterJob(tempFilterJob);
  }
  const setAllJobs = () =>{
    setFilterJob(jobs)
  }
  const handleChange = (e) => {

    const tempFilterJob = [];
    const companyName = e.target.value;
    jobs.filter((job)=> {
        if(job.companyName === companyName){
            tempFilterJob.push(job);
        }
    })
    
    setFilterJob(tempFilterJob);
  }
  useEffect(()=> {
    console.log(props.jobs)
    setAllJobs();
  },[])
  return (
    <div className="filter">
      
      <Multiselect
        displayValue="key"
        value={selectedFlavors}
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={onSelect}      
        options= {RoleOptions}
        placeholder="Role"
        className='dropDown'
        />
    
    <Multiselect
        displayValue="key"
        value={selectedFlavors}
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={onSelect}      
        options= {NoOfEmpOptions}
        placeholder="Number Of Employee"
        className='dropDown'
        />
         <Multiselect
        displayValue="key"
        value={selectedFlavors}
        id="1"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={onSelect}      
        options= {Experience}
        placeholder="Experience"
        className='dropDown'
        />
         <Multiselect
        displayValue="key"
        id="1"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={onSelect}      
        options= {JobType}
        placeholder="Remote"
        className='dropDown'
        />
         <Multiselect
         
        displayValue="key"
        id="1"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={onSelect}      
        options= {MinPaySalary}
        placeholder="Minimum Base Pay Salary"
        className='dropDown'
        singleSelect
        />
        
        <input placeholder="Search Company Name" 
        onChange={handleChange} class="search"/>
        
        <JobPages jobs = {filterJobs} />
    </div>
  )
}

export default Filter