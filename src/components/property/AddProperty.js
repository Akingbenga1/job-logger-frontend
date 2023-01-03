import { useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ELOGBOOK_BACKEND_SERVICE} from "../Home";
function AddProperty() {
    const defaultNewPropertyFields = {
        property_name : "",
    };

    const [newPropertyDetails, setNewPropertyDetails] = useState(defaultNewPropertyFields);
    const {property_name}  = newPropertyDetails;

    const navigate   = useNavigate();

    const handleChange = (event) =>
    {
        const {name, value} = event.target;
        setNewPropertyDetails({...newPropertyDetails, ...{[name] :  value} });
    }

    const resetFormFields = () =>
    {
        setNewPropertyDetails(defaultNewPropertyFields);
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        // Check that form is filled
        for (const property in newPropertyDetails)
        {
            if(newPropertyDetails[property] === "")
            {
                alert(`You must fill values for ${property}!`);
                return;
            }
        }

        try
        {
            // call endpoint to save property details in backend url
            // build job post endpoint
            // call endpoint to create new property
            const addPropertyResponse = await axios.post(`${ELOGBOOK_BACKEND_SERVICE}/properties`, {name: newPropertyDetails.property_name});

            // reset form to initial values
            resetFormFields();
            // redirect to job list page
            navigate("/add-jobs", {replace : true});
        }
        catch(e)
        {
            alert("There was an error processing this operation");

        }
    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                        Add Property
                    </h1>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Property Name
                            </label>
                            <input required="required" name="property_name" type="text"
                                   className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={property_name}  onChange={handleChange}/>
                        </div>
                        <div className="mt-6">
                            <button
                                type='submit'
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Add Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProperty;
