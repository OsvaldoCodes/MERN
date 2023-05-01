import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Parameters from './components/Parameters';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={< Parameters />} />
          <Route path="/:word/:color/:backColor" element={<Parameters />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
