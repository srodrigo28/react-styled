import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/cliente">Clientes</Link>
            <Link to="/service">Serviços</Link>
        </div>
    )
}