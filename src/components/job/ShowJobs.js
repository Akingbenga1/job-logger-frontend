
import {JobsContext} from "../../context/jobs.context";
import {useContext} from "react";


function ShowJobs() {
    const  {jobs}  = useContext(JobsContext);
    return (

        <div className="relative flex flex-col justify-center p-12 overflow-hidden">
            <div className="w-full pt-6 m-auto bg-white rounded-md shadow-md ">
                <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                    List of Jobs
                </h1>
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="w-full overflow-hidden border rounded-lg overflow-x-auto">
                        <table className="w-full table-auto divide-y divide-gray-200">
                            <thead className="w-full bg-gray-50">
                            <tr>
                                <td  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</td>
                                <td  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Summary </td>
                                <td  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Status </td>
                                <td  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Property Name</td>
                                <td  scope="col"className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Raised By </td>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {
                                jobs && jobs.jobs && jobs.jobs.length > 0 ?
                                    (
                                        jobs.jobs.map(job =>
                                        {
                                            return (
                                                <tr key={job.id}>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{job.id}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{job.summary}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"><span className="text-red-500 hover:text-red-700">{job.status}</span></td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"><span className="text-green-500 hover:text-green-700">{job.property.name}</span></td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{job.user.first_name} {job.user.last_name} </td>
                                                </tr>
                                            )
                                        })
                                    )
                                    : ""
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowJobs;
