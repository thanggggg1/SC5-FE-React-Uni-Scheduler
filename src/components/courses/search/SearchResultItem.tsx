import { MouseEvent } from "react"
import { Course } from "../interfaces"

export default function SearchResultItem(props: {course: Course, idx: number, add_course: (event: MouseEvent<HTMLButtonElement>) => void}){
    return <div id={props.course.course_code} className="card my-3">
            <div className="card-header">
                {props.course.course_name}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.course.course_code}</h5>
                <p className="card-text">{props.course.course_name}</p>
                { // @ts-ignroe 
                    <button data-idx={props.idx} onClick={props.add_course} className="btn btn-primary">Add to cart</button>
                }
            </div>
        </div>
}