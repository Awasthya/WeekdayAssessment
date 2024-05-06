import React, { useEffect, useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import {RoleOptions,NoOfEmpOptions,Experience,JobType,MinPaySalary} from './FilterData';
import JobPages from './JobPages';
import './filter.css';
const Filter = (props) => {
    const jobs = props.jobs;
    const [filterJobs,setFilterJob] = useState();
const [selectedFlavors, setSelectedFlavors] = useState([]);
const selectedFilter = [];
  
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
                    if(job.maxExp >= flavors.key){
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
        singleSelect
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