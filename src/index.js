import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { AuthProvider } from './contexts/AuthProvider';
import { UserProvider } from './contexts/UserProvider';

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
    <AuthProvider>
      <UserProvider>
        <AppWithCallbackAfterRender />
      </UserProvider>   
    </AuthProvider>
  </ContextProvider>
);
