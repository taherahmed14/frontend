import { useState } from 'react';
import './App.css';
import { Dashboard } from './components/dashboard';
import { Routes, Route } from "react-router-dom";
import { Teacher } from './components/teacher';

function App() {
  const [teachers, setTeachers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      <Routes>
        <Route path='/dashboard' 
          element={<Dashboard teachers={teachers} setTeachers={setTeachers} pageNumber={pageNumber} setPageNumber={setPageNumber} />}>
        </Route>
        <Route path='/dashboard/:id' 
          element={<Teacher />}>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
