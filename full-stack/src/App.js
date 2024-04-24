import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from "./Authentication";
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';


function App() {
  return(

    <Router>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>} exact/>
        </Route>
        <Route path="/register" element={<Authentication/>} />
        <Route path="/login" element={<Authentication/>} />
      </Routes>
    </Router>
  );
  
}

export default App;
