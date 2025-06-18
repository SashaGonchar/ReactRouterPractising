import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import Category from "./pages/Category.jsx"
import NotFound from "./pages/NotFound.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"

const router = createBrowserRouter([{
    path: "/", element: <Layout/>, children: [
        {path: "", element: <Home/>},
        {path: "about", element: <About/>},
        {path: "cart", element: <Cart/>},
        {path: "category/:categoryId", element: <Category/>},
        {path: "product/:productId", element: <ProductDetails/>},
        {path: "*", element: <NotFound/>},
    ]
}]);


function App() {

    return <RouterProvider router={router}/>;
}

export default App;
