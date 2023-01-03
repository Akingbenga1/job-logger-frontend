import {Link, Outlet, useLocation} from "react-router-dom";
import AddJob from "./job/AddJob";
import AddProperty from "./property/AddProperty";

export const ELOGBOOK_BACKEND_SERVICE ="http://127.0.0.1:8000/api";

function Home() {
    const location = useLocation();
  return (
      <div>
          <nav className="bg-white shadow-lg">
              <div className="max-w-6xl mx-auto px-4">
                  <div className="flex justify-between">
                      <div className="flex space-x-7">
                          <div>
                              <Link to="/" className="flex items-center py-4 px-2">
                                  {/*<img alt="Job Logger" className="h-8 w-8 mr-2" />*/}
                                  <span className="font-semibold text-gray-500 text-lg"
                                  >E-LogBooks</span
                                  >
                              </Link>
                          </div>
                          <div className="hidden md:flex items-center space-x-1">
                              <Link to="/add-property" className="py-4 px-2 text-purple-500 border-green-500 font-semibold "> Add Property </Link><br />
                              <Link to="/add-jobs" className="py-4 px-2 text-purple-500 border-green-500 font-semibold "> Add a new Job </Link><br />
                              <Link to="/jobs" className="py-4 px-2 text-purple-500 border-green-500 font-semibold "> List of Jobs </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
          {location && location.pathname && location.pathname === "/" ?  <AddProperty /> : " " }
      <Outlet />
      </div>

  );
}

export default Home;
