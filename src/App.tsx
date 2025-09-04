import React, { useState, useEffect } from 'react';
import './App.css';

// --- Type definition for API status ---
type ApiStatus = 'operational' | 'degraded' | 'offline' | 'loading';

// --- SVG Icon Components (self-contained, no imports needed) ---
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);


const App: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<ApiStatus>('loading');

  // This effect simulates fetching data from a backend API.
  // It's a great way to show your deployed app is dynamic.
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setApiStatus('operational');
    }, 1500); // 1.5 second delay to show the "loading" state
  }, []); // The empty array ensures this runs only once on component mount

  const getStatusIndicatorClass = (status: ApiStatus): string => {
    switch (status) {
      case 'operational': return 'status-operational';
      case 'degraded': return 'status-degraded';
      case 'offline': return 'status-offline';
      default: return 'status-loading';
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <span>QuantumLeap</span>
        </div>
        <div className="api-status">
          <span>API Status:</span>
          <div className={`status-indicator ${getStatusIndicatorClass(apiStatus)}`}></div>
          <span className="status-text">{apiStatus}</span>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Deployment Successful</h1>
          <p className="hero-subtitle">
            This application is live, powered by a seamless cloud deployment platform.
          </p>
          <div className="hero-cta">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">View Documentation</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon"><CloudIcon /></div>
            <h3 className="feature-title">Cloud Native</h3>
            <p className="feature-description">
              Built on a scalable, resilient infrastructure that grows with your needs.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><CodeIcon /></div>
            <h3 className="feature-title">Developer Friendly</h3>
            <p className="feature-description">
              Integrates directly with your Git workflow for automated, hassle-free deployments.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldIcon /></div>
            <h3 className="feature-title">Secure & Reliable</h3>
            <p className="feature-description">
              Enterprise-grade security and a 99.9% uptime guarantee ensure peace of mind.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 QuantumLeap Industries. This is a demonstration application.</p>
      </footer>
    </div>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
