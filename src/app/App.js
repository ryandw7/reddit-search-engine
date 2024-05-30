
import './App.css';
import PostPage from '../pages/PostPage.js'
import { setUpStore }from './store.js';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import PageTemplate from './PageTemplate.js';
import HomePage from '../pages/HomePage.js';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
