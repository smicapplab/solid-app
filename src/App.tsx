import type { Component } from 'solid-js';
import { Route, Routes, A } from '@solidjs/router';
import { lazy } from 'solid-js';


const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));


const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path={["login", "sign-up"]} element={<h1>This is logib/Signup</h1>} />
      </Routes>
    </>
  );
};

export default App;
