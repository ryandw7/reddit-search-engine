
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import PageTemplate from './PageTemplate.js';
import HomePage from '../pages/HomePage.js';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
