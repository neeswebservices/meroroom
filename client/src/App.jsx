import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

function App() {
    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
