import { FormEvent } from "react";

export default function CourseSearch(props: {get_courses: (event: FormEvent<HTMLInputElement>) => void}){
    return (
        <div className="card col-12 bx-shadow">
            <div className="card-body p-4">
                <h1 className="fs-4 fw-normal">Search for Courses</h1>

                <div className="mt-4 mb-3">
                    <input type="text" onChange={props.get_courses} className="form-control fs-6 p-3" placeholder="Search" />
                </div>
            </div>
        </div>
    )
}