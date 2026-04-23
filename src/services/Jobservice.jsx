import { API_ENDPOINTS } from "../constants/api"

export const fetchJobs = async () => {
    const response=await fetch(API_ENDPOINTS.JOB_API);
    if(!response.ok){
        throw new Error("failed to fetch jobs");
    }
    const data= await response.json();
    console.log(data);
    return data.jobs;

}