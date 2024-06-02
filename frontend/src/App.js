import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages and components
import Home from './pages/Homepage.js'
import Navbar from './components/navbar.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
