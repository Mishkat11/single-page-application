import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/DashBoard/Dashboard";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const MyCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/products",
                element: <Products></Products>,
                loader:()=>fetch(`https://dummyjson.com/products`)
            }, 
            {
                path:'/products/:id',
                element:<ProductDetails></ProductDetails>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default MyCreatedRoute;