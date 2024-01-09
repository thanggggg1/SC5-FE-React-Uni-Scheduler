import { MouseEvent } from "react";
import { Course } from "../interfaces";
import SearchResultItem from "./SearchResultItem";
import CourseMotion from "../CourseMotion";
import { AnimatePresence } from "framer-motion";


export default function SearchResultList(props: {courses: Course[], add_course: (event: MouseEvent<HTMLButtonElement>) => void}){
    const courses_list = props.courses.map((course, idx) => <SearchResultItem course={course} idx={idx} add_course={props.add_course} />)
    
    return (
        <AnimatePresence>
            <div key={courses_list.length} className="w-100 mt-4">
                <h1 className="display-5 fs-5 ms-2">
                    {props.courses.length} Results
                </h1>
                <CourseMotion>
                    {...courses_list}
                </CourseMotion>

            </div>
        </AnimatePresence>

    )
}