import { Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/profile/*" element={<Profile />} />
    </Routes>
  )
}

export default App