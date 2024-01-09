import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'

import RootLayout from './components/rootLayout/RootLayout'
import Courses from "./components/courses/Courses";
import Schedules from "./components/schedules/Schedules";
import Home from "./components/Home";

import {createBrowserRouter, 
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/schedules" element={<Schedules />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
        </Route>
    )
);


function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
