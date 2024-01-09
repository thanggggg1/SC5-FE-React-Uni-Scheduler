import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./RootLayout.css"

export default function RoutLayout(){
    return (
        <div className="root-layout">
            <header>
                <Navbar />
            </header>

            <main className="container mt-5">
                <Outlet />
            </main>
        </div>
    )
}
