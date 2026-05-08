import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '20px', textAlign: 'center', background: '#fff' }}>
        <Link to="/feed" style={{ margin: '0 15px', color: '#6c5ce7', textDecoration: 'none', fontWeight: 'bold' }}>Feed</Link>
        <Link to="/create-post" style={{ margin: '0 15px', color: '#6c5ce7', textDecoration: 'none', fontWeight: 'bold' }}>Create Post</Link>
      </nav>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/' element={<Feed/>}/> {/* Default to Feed */}
      </Routes>
    </Router>
  )
}

export default App;