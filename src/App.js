import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Show from './Components/Show';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/add' element={<Add/>}></Route>
  <Route path='/show' element={<Show/>}></Route>
  <Route path='/update/:ok' element={<Update/>}></Route>
  <Route path='/delete/:ok' element={<Delete/>}></Route>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
