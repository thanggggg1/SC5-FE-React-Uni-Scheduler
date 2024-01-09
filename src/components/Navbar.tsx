import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const Config = {
    baseURL: 'https://gadwelooh-api.publicvm.com',
    headers: {
        // 'Accept': 'application/vnd.GitHub.v3+json',
        //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    },
    transformResponse: [
        (data: string) => JSON.parse(data),
    ],
}


async function get_cnt(): Promise<{ "id": number, "total_cnt": number, "successfull_cnt": number }> {
    const Client = axios.create(Config)
    const cnt = await Client.get<{
        "id": number, "total_cnt": number, "successfull_cnt": number
    }>("/visits");

    return cnt.data;
}


let flag = true;


export default function Navbar() {
    const [cnt, set_cnt] = useState({ "id": -1, "total_cnt": -1, "successfull_cnt": -1 });

    const update_cnt = async () => {
        const cnt = await get_cnt();
        set_cnt(cnt);

        if (flag) setInterval(update_cnt, 5000);
        flag = false;
    }

    useEffect(() => {
        update_cnt();
    }, [])


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="./home">Gadwelooh</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="./home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="./courses">Courses</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="./schedules">Schedules</NavLink>
                        </li>

                        <li className="nav-item ms-auto">
                            <div className="nav-link" ><code>#</code> Of App Usages: <code>{cnt.total_cnt}</code></div>
                        </li>
                        {/* <li className="nav-item">
                        <NavLink className="nav-link" to="#">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link disabled" to="#" tabIndex={-1} aria-disabled="true">Disabled</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
