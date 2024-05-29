import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { setUpStore } from './app/store.js';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

import { server } from './mocks/node.js'
 
server.listen()
 
// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
  const response = await fetch('https://example.com/user')
  const user = await response.json()
  console.log(user)
}
 
app()
 
// This is a simple Node.js application that
// does a network request and prints the response.
/* async function app() {
  const response = await fetch('https://example.com/user')
  const user = await response.json()
  console.log(user)
}

app()

 const preloadedState = {}
  const store = setUpStore(preloadedState);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/