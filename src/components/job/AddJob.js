import {useContext, useState} from "react";
import axios from "axios";
import {PropertiesContext} from "../../context/properties.context";
import {Link, useNavigate} from "react-router-dom";
import {ELOGBOOK_BACKEND_SERVICE} from "../Home";
function AddJob() {
    const defaultNewJobFields = {
        summary : "",
        description : "",
        property : "",
        first_name : "",
        last_name : "",
        email : "",
    };

    const [newJobDetails, setNewJobDetails] = useState(defaultNewJobFields);
    const {summary, description, property, first_name, last_name, email   }  = newJobDetails;
    const  {properties}  = useContext(PropertiesContext);

    const navigate   = useNavigate();


    const handleChange = (event) =>
    {
        const {name, value} = event.target;
        setNewJobDetails({...newJobDetails, ...{[name] :  value} });
    }

    const resetFormFields = () =>
    {
        setNewJobDetails(defaultNewJobFields);
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        // Check that form is filled
        for (const property in newJobDetails)
        {
            if(newJobDetails[property] === "")
            {
                if(newJobDetails[property] === "property")
                {
                    alert(`You must fill values for property or add a new Property first!`);
                }
                alert(`You must fill values for ${property}!`);
                return;
            }
        }

        try
        {
            // call endpoint to save job details backend url
            // build job post endpoint
            const newJobPostData = {...newJobDetails, ...{property_id: newJobDetails.property} };
            // call endpoint to create new job
            const addJobsResponse = await axios.post(`${ELOGBOOK_BACKEND_SERVICE}/jobs` , newJobPostData);
            // reset form to initial values
            resetFormFields();
            // redirect to job list page
            navigate("/jobs", {replace : true});
        }
        catch
        {

        }
    }

    return (
            <div>

                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    {
                        properties && properties.properties && properties.properties.length > 0
                            ? (<div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                                <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                                    Add Jobs
                                </h1>
                                <form onSubmit={handleSubmit} method="POST">
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-800"
                                        >
                                            Email
                                        </label>
                                        <input required="required" name="email" type="email"
                                               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={email}  onChange={handleChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-800"
                                        >
                                            First Name
                                        </label>
                                        <input required="required" name="first_name" type="text"
                                               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={first_name}  onChange={handleChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-800"
                                        >
                                            Last Name
                                        </label>

                                        <input required="required" name="last_name" type="text"
                                               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"  value={last_name}  onChange={handleChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-800">
                                            Property
                                        </label>
                                        <select required="required" name="property" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"   value={property}  onChange={handleChange}>
                                            <option> Add Property </option>
                                            {
                                                ( properties && properties.properties &&  properties.properties.length > 0 ) ?    properties.properties.map(propertyItem =>
                                                    {
                                                        return (  <option key={propertyItem.id} value={propertyItem.id}>{propertyItem.name}</option> )
                                                    })
                                                    : ""
                                            }
                                        </select>

                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-800"
                                        >
                                            Summary
                                        </label>
                                        <input required="required" name="summary" type="text"
                                               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={summary}  onChange={handleChange}/>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-800"
                                        >
                                            Description
                                        </label>

                                        <textarea required="required" name="description" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"  value={description}   onChange={handleChange}>

                            </textarea>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            type='submit'
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                            Add Job
                                        </button>
                                    </div>
                                </form>
                            </div>)
                            : (
                                <div>
                                    There are no properties available. Please add a new property first using this link
                                    <Link to='/add-property' className="">Add Property</Link> before proceeding.
                                </div>
                            )
                    }

                </div>
            </div>
    );
}

export default AddJob;
