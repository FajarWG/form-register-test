import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Register from './pages/Register.js';
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
