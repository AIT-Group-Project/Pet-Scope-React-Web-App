import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function AppWithCallbackAfterRender() {
  React.useEffect(() => {
    //console.log('rendered');
  }, []);

  return <App tab="home" />;
}

root.render(
  <ContextProvider>
    <AppWithCallbackAfterRender />
  </ContextProvider>
);
