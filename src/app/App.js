
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import PageTemplate from './PageTemplate.js';
import Trending from '../features/trending/Trending.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path="/" element={<Trending />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
