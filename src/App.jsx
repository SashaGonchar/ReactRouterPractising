import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import Categories from "./pages/Categories.jsx"
import NotFound from "./pages/NotFound.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
    {
        path: "/", element: (
            <>
                <Header/>
                <Home/>
                <Footer/>
            </>)
    },
    {
        path: "about", element:
            <>
                <Header/>
                <About/>
                <Footer/>
            </>
    },
    {
        path: "cart", element:
            <>
                <Header/>
                <Cart/>
                <Footer/>
            </>
    },
    {
        path: "categories", element:
            <>
                <Header/>
                <Categories/>
                <Footer/>
            </>
    },
    {
        path: "productDetails", element:
            <>
                <Header/>
                <ProductDetails/>
                <Footer/>
            </>
    },
    {
        path: "*", element:
            <>
                <Header/>
                <NotFound/>
                <Footer/>
            </>
    },
]);

function App() {

    return <RouterProvider router={router}/>;
}

export default App;
