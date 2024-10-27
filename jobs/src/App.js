
import './App.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Catagories from './pages/Catagories';
import Company from './pages/Company';
import FindJob from './pages/FindJob';
import JobGrid from './pages/JobGrid';
import PostJob from './pages/PostJob';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';
import Candidate from './pages/Candidate';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home/> }></Route>        
                  
          <Route path='/about' element={<About/> }></Route>              
          <Route path='/contact' element={<Contact/> }></Route> 
          <Route path='/blog' element={<Blog/> }></Route> 
          <Route path='/catagories' element={<Catagories/> }></Route> 
          <Route path='/company' element={<Company/> }></Route> 
          <Route path='/find-job' element={<FindJob/> }></Route> 
          <Route path='/job-grid' element={<JobGrid/> }></Route> 
          <Route path='/post-job' element={<PostJob/> }></Route> 
          <Route path='/sign-in' element={<SignIn/> }></Route> 
          <Route path='/sign-up' element={<SignUp/> }></Route>              
          <Route path='/job-list' element={<JobList/> }></Route>
          <Route path='/job-details' element={<JobDetails/> }></Route>    
          <Route path='/candidate' element={<Candidate/> }></Route>   
        </Route>
      </Routes>
  </BrowserRouter>
    </>
   
  );
}

export default App;
