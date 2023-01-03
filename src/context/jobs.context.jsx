import axios from "axios";
import {useState, useEffect, createContext} from "react";
import {useLocation} from "react-router-dom";
import {ELOGBOOK_BACKEND_SERVICE} from "../components/Home";


 export const JobsContext = createContext({
jobs: [],
});

 const  JobsProvider = ({children}) =>
{
    const [jobs, setJobs] = useState([]);
    let location = useLocation();


    useEffect(() =>
    {
        const getJobs = async() => {
            const jobsResponse = await axios.get(`${ELOGBOOK_BACKEND_SERVICE}/jobs`);
            let jobResultArray = [];
            // console.log("jobResultArray =====> ", jobsResponse.data.data);
            jobResultArray = jobsResponse.data.data;
            setJobs(jobResultArray);
        };
        getJobs();

    }, [location]);
    const value = {jobs};

  return  <JobsContext.Provider value={value}> {children} </JobsContext.Provider>
}


export default JobsProvider;