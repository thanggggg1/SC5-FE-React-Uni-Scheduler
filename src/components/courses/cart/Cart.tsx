import CartItem from "./CartItem"
import { Course, Obj } from "../interfaces"
import { MouseEvent } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const params = { pageNo: 1, limit: 150 };
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


export default function Cart(props: { cart_list: Course[], remove_course: (event: MouseEvent<HTMLButtonElement>) => void }) {
    const navigate = useNavigate();

    async function generate_schedules(_event: MouseEvent<HTMLButtonElement>) {
        const needed_courses = props.cart_list.map(course => course.course_code);

        const Client = axios.create(Config)
        const scheudles = await Client.post<{ pagination: Obj, results: Obj[] }>("/schedules", { needed_courses }, { params });
        console.log(scheudles.data)

        navigate("/schedules", { replace: true, state: { data: scheudles.data } })
    }


    return (
        <div className="card col-12 col-md-11 bx-shadow" style={{ "borderTop": "1rem solid #51ABFF", maxHeight: "75vh", overflow: "hidden" }}>
            <div className="card-body d-flex flex-column justify-content-between p-5 p-lg-4">
                <div>
                    <div className="d-flex justify-content-between algin-content-center">
                        <h1 className="fs-4 align-middle"><i className="bi bi-cart"></i> Cart</h1>
                    </div>

                    <div className="pe-2 my-3" style={{ maxHeight: "45vh", overflow: "auto" }}>
                        {props.cart_list.map(course => <CartItem remove_course={props.remove_course} course={course} />)}
                    </div>
                </div>
                <button onClick={generate_schedules} className="btn btn-success mt-3 w-50" style={{ minWidth: "100px" }}>Generate</button>
            </div>
        </div>
    )
}