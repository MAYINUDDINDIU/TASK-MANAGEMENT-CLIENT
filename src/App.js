import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Calendar from './Pages/Home/Calendar';
import Alltask from './Pages/Home/Alltask';
import Taskadd from './Pages/Home/Taskadd';
import UpdateTask from './Pages/Home/UpdateTask';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Alltask></Alltask>}>Home</Route>
        <Route path='/Add-Task' element={<Taskadd></Taskadd>}>Add Task</Route>
        <Route path='/Update/:id' element={<UpdateTask></UpdateTask>}>Update Task</Route>
        <Route path='/Calendar' element={<Calendar></Calendar>}>Home</Route>
      </Routes>
      <Footer className='mt-30'></Footer>
    </div>
  );
}

export default App;
