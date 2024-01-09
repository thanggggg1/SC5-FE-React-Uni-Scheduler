import { NavLink } from "react-router-dom";

export default function EmptyCourseList(){
    return <>
        <div className="card text-center mt-0">
            <div className="card-header">
                Alret
            </div>
            <div className="card-body">
                <h5 className="card-title">Empty Cart</h5>
                <p className="card-text">No courses were added to cart. Go to <code>/courses</code> and select the desired courses for schedule generation.</p>
                <NavLink to="/courses" className="btn btn-primary">Go To Add Courses</NavLink>
            </div>
        </div>
    </>
}