import { NavLink } from "react-router-dom";

export default function NoTablesMatched(){
    return <>
        <div className="card text-center mt-0">
            <div className="card-header">
                Alret
            </div>
            <div className="card-body">
                <h5 className="card-title">No tables match specified filters</h5>
                <p className="card-text">Removed filters to see available tables or go to <code>/courses</code> and select other desired courses for schedule generation.</p>
                <NavLink to="/courses" className="btn btn-primary">Go To Add Courses</NavLink>
            </div>
        </div>
    </>
}