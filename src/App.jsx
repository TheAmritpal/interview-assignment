import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
const routes = [
  {
    path: "/",
    element: "",
  },
];

const location = new ReactLocation();

function App() {
  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
}

export default App;
