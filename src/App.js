import Navbar from './Navbar';
import Home from './Home';
import SellYours from './SellYours';
import EstateDetails from './EstateDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllEstates from './AllEstates';

function App() {

  return (
    <Router>
      <div className="App">
        
          <Navbar></Navbar>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/AllEstates" element={<AllEstates/>} />
              <Route path="/SellYours" element={<SellYours/>} />
              <Route path="/estates/:id" element={<EstateDetails/>} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
