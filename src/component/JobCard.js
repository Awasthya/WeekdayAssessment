import React, {useState} from 'react'
import './JobStyle.css'
import JobDescModel from './JobDescModel';
import Modal from 'react-modal';

const JobCard = (props) => {

    const [showJobDesc, setShowJobDesc] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    function capitalizeFirstLetters(str){
        return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
            return letter.toUpperCase();
        })
      }
    const showFullDesc = () => {
        setShowJobDesc(true);
    }
    function openModal() {
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
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
        Estimated Salary: ₹{props.minSalary} - {props.maxSalary} LPA
        <p class='companyName'>About Company :</p>
        <p class='desc'>
            <p> {props.jobDesc.slice(0,200)}... </p>
            <button onClick={openModal} class='showMoreBtn'> Show More</button>
        </p>
        </div>
        
        <div className="jobHeader">
        <p className='companyName'>Minimum Experience </p>
        <p> {props.minExp} Years</p>
        </div>
        <button class="cardButton easyApply"> Easy Apply </button>
        <button class="cardButton referral"> Unlock Referral Asks</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        class= 'customStyles'
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} class='closeBtn'>close</button>
        <p> About Company: </p>
        <p> {props.jobDesc}</p>
        <p> About Role: </p>
        <p></p>
      </Modal>
    </div>
  )
}

export default JobCard