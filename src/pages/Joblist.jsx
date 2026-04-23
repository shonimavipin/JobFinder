
import React, { useState,useEffect } from 'react'
import { fetchJobs } from '../services/Jobservice'
import JobCard from '../components/Jobcard';
import '../styles/Joblist.css';
function Joblist() {
    const [jobs,setjobs]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState();
   
useEffect(() => {
    fetchJobs()
    .then((data) =>{
        setjobs(data);
        setloading(false);
    })
    .catch((error) =>{
        seterror(error.message);
        setloading(false);
    })

},[]);
if(loading){
    return <h2>Loading...</h2>
}
if(error){
    return <h2>Error: {error}</h2>
}
        
    return (    
        <div className='main'>
            
            <div className='container'>
            {
                jobs.map((j) => (
                    <JobCard key={j.id} job={j}/>
                
            ))}
            </div>
        </div>
    )
}
export default Joblist;