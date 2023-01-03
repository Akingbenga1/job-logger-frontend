import axios from "axios";
import {useState, useEffect, createContext} from "react";
import {useLocation} from "react-router-dom";
import {ELOGBOOK_BACKEND_SERVICE} from "../components/Home";


 export const PropertiesContext = createContext({
properties: [],
});


 const  PropertiesProvider = ({children}) =>
{
    const [properties, setProperties] = useState([]);
    let location = useLocation();
    useEffect(() =>
    {
        const getProperties = async() => {
            const propertiesResponse = await axios.get(`${ELOGBOOK_BACKEND_SERVICE}/properties`);
            let propertyResultArray = [];
            propertyResultArray = propertiesResponse.data.data;
            setProperties(propertyResultArray);
        };
        getProperties();

    }, [location]);
    const value = {properties};

  return  <PropertiesContext.Provider value={value}> {children} </PropertiesContext.Provider>
}


export default PropertiesProvider;