import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/DashBoard';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

function App() {

  return (
    <div className="App">
      <Routes>

        <Route exact path="/"
          element={<Dashboard />} />

        <Route path="/login"
          element={<LoginPage />}
        />

        <Route path="/signup"
          element={<SignupPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
