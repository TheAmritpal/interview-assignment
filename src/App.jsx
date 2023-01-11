import React, { Suspense } from "react";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";

const Home = React.lazy(() => import("./components/Home"));
const Counter = React.lazy(() => import("./components/Counter"));
const Form = React.lazy(() => import("./components/Form"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/form",
    element: <Form />,
  },
];

const location = new ReactLocation();

function App() {
  return (
    <Router routes={routes} location={location}>
      <Suspense>
        <Outlet />
      </Suspense>
    </Router>
  );
}

export default App;
