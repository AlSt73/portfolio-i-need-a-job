import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home.jsx';
import About from "../components/pages/About.jsx";
import Layout from "../components/layout/Layout.jsx";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index  element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<h1>Ruta no existe!</h1>} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Routing;