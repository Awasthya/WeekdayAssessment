import React, {useState} from 'react'
import './JobStyle.css'
import JobDescModel from './JobDescModel';
const JobCard = (props) => {

    const [showJobDesc, setShowJobDesc] = useState(false);
    function capitalizeFirstLetters(str){
        return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
            return letter.toUpperCase();
        })
      }
    const showFullDesc = () => {
        setShowJobDesc(true);
    }
  return (
    <div class="jobCardOuter">
        <div className="jobLogo">
            <img src={props.jobLogo} alt='logo'/>
            <div className="jobHeader">
                <p class='companyName'> {props.companyName}</p>
                <p class='jobRole'> {capitalizeFirstLetters(props.jobRole)}</p>
                <p class='location'> {capitalizeFirstLetters(props.location)}</p>
            </div>
        </div>
        <div className="bottomContent">
        Estimated Salary: ₹{props.minSalary} - {props.maxSalary}
        <p class='companyName'>About Company :</p>
        <p class='desc'>
            <p> {props.jobDesc.slice(0,200)} </p>
            <button onClick={showFullDesc}> Show More</button>
        </p>
        </div>
        
        <div className="jobHeader">
        <p className='companyName'>Minimum Experience </p>
        <p> {props.minExp} Years</p>
        </div>
        <button class="cardButton easyApply"> Easy Apply </button>
        <button class="cardButton referral"> Unlock Referral Asks</button>
        {/* <JobDescModel jobDesc = {props.jobDesc} />  */}
    </div>
  )
}

export default JobCard