import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/presentation/App';
import 'src/presentation/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
