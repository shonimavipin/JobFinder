
import { FaMapMarkerAlt, FaBriefcase, FaGlobe } from "react-icons/fa";
import React from 'react'
import '../styles/Joblist.css';
function JobCard(props) {
    const job=props.job;
    return(
        
<div className="card">

      <span className="tag">Full Time</span>

      <h4>{job.title}</h4>

      <p className="company">{job.company_name}</p>

      <p className="info">
        <FaMapMarkerAlt className="icon" />
        {job.candidate_required_location}
      </p>

      <p className="info">
        <FaBriefcase className="icon" />
        {job.category}
      </p>

      <p className="info">
        <FaGlobe className="icon" />
        Remote
      </p>

      <button className="apply">Apply Now</button>

        </div>
    )
}
export default JobCard;