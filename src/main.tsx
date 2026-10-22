import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// The static document is complete without JS. Hand metadata ownership to
// React when the client starts so route changes cannot retain stale canonicals.
document.head.querySelectorAll('[data-prerender]').forEach(node => node.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
