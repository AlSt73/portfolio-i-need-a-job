import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home.jsx';
import Projects from "../components/pages/Projects.jsx";
import Layout from "../components/layout/Layout.jsx";
import SingleProject from "../components/pages/SingleProject.jsx";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index  element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<SingleProject />} />
                    <Route path="*" element={<h1>Ruta no existe!</h1>} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Routing;