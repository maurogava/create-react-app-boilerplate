import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';

const Home = lazy(() => import('features/home/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback="loading...">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
