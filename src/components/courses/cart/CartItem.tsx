import { MouseEvent } from "react";
import { Course } from "../interfaces";

export default function CartItem(props: { course: Course, remove_course: (event: MouseEvent<HTMLButtonElement>) => void }){
    return (
        <div id={props.course.course_code} className="card mb-3">
            <div className="card-body" style={{"borderLeft": "0.5rem solid #1ABF96"}}>
                <div className="d-flex justify-content-between align-middle algin-content-center">
                    <h5 className="card-title">{props.course.course_code}</h5>
                    <button onClick={props.remove_course} id={props.course.course_code} className="bi bi-x-lg fw-bold text-danger bg-transparent border-0"></button>
                </div>
                <h6 className="card-subtitle my-2 text-muted">{props.course.course_name}</h6>
            </div>
        </div>
    )
}