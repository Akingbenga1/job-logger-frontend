import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import AddJob from "./components/job/AddJob";
import ShowJobs from "./components/job/ShowJobs";
import Home from "./components/Home";
import AddProperty from "./components/property/AddProperty";

function App() {
  return (
      <Routes>
          <Route path='/' element={ <Home  />} >
                  <Route path='add-jobs' element={ <AddJob  />} />
                  <Route path='jobs' element={ <ShowJobs/>} />
                   <Route path='add-property' element={<AddProperty  />} />
          </Route>
      </Routes>
  );
}

export default App;
