import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddRecipe from './pages/addRecipe';
import SavedRecipe from './pages/savedRecipe';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='addRecipe' element={<AddRecipe />} />
          <Route path='savedRecipe' element={<SavedRecipe />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
