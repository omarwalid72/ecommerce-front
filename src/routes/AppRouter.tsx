import {Mainlayout} from '@layouts/index';
//pages
import Home from '@pages/Home';
import Categories from '@pages/categories';
import Products from '@pages/pruducts';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';
//layouts
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRouter = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/categories',
          element: <Categories />,
        },
        {
          path: '/categories/products/:prefix',
          element: <Products />,
          loader:({params}) => {
            if(typeof params.prefix !== 'string'||!/^[a-z]+$/.test(params.prefix)){
              throw new Response("bad request",{statusText:"Category not found",status:400})
            }            
            return true
        }},
        {
          path: '/about-us',
          element: <AboutUs />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        }
      ],
    }
    ])
  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default AppRouter