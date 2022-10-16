import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Orders from './Components/Orders';
import PrivateRoutes from './Components/Routes/PrivateRoutes';

function App() {
  const router=createBrowserRouter([
    {
      path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>},
        {path:'/login', element:<Login></Login>},
        {path:'/orders', element:<PrivateRoutes><Orders></Orders></PrivateRoutes>},
        {path:'/register', element:<Register></Register>}
      ]
    }
  ])
  return (
    <div className="App">
      
        <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
