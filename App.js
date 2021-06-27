import  { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path='/' exact />
        <Route component={NasaPhoto} path='/nasaphoto' />
      </div>
    </BrowserRouter>
  );
}

export default App;
