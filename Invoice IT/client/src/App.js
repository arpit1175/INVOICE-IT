import './App.css';
import Addpo from './Components/Addpo';
import Navbar from './Components/Navbar';
import POform from './Components/POform';
import Potable from './Components/Potable';
import ViewPO from './Components/ViewPO';
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Edit from './Components/Edit';

function App() {




  return (

<>
<Navbar></Navbar>
<Router>
  <Routes>
  <Route path="/" element={<Potable />}/>
  <Route path="/add" element={<POform/>}/>
  <Route path ="/view/:id" element={<ViewPO/>}/>
  <Route path ="/edit/:id" element={<Edit/>}/>
  </Routes>
</Router>






   {/* <Navbar/>
   <Addpo/>
   <Potable/>

<POform/>

<ViewPO/> */}
   </>
  );
}

export default App;
