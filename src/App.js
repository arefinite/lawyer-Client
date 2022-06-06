import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Login from './Pages/Auth/Login';
import Registration from './Pages/Auth/Registration';
import RequireAuth from './RequireAuth';
import CheckOut from './Pages/CheckOut';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        
        <Route path='/checkout' element={<RequireAuth>
        <CheckOut/>
        </RequireAuth>}></Route>
        
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
