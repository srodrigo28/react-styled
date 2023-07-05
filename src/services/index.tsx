import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cliente } from "../pages/Cliente";
import { Servico } from "../pages/Servico";
import { Menu } from "../components/Menu";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/servico" element={<Servico />} />
            </Routes>
        </BrowserRouter>
    )
}