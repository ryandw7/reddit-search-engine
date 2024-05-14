
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import PageTemplate from './PageTemplate.js';
import Trending from '../features/trending/Trending.js';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path="/" element={<Trending />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
