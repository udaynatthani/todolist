import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

function app(){
  return (
    <div>
        <h2 className='text-center border-bottom'>this is my todolist
        </h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

