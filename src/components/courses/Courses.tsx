import { useState, MouseEvent, FormEvent } from "react";
import Cart from "./cart/Cart"
import CourseSearch from "./search/CourseSearch"
import SearchResultList from "./search/SearchResultList"
import axios from 'axios'
import { Course } from "./interfaces";
import CourseMotion from "./CourseMotion";


const params = { pageNo: 1, limit: 1000, q: '' };
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



export default function Courses() {
    async function get_courses(event: FormEvent<HTMLInputElement>) {
        params.q = event.currentTarget.value;
        if (params.q == '') {
            set_course_response_list(empty_list)
            return;
        }

        const Client = axios.create(Config)
        const courses = await Client.get<{ pagination: string, results: Course[] }>("/courses", { params });
        if (Array.isArray(courses.data.results)) set_course_response_list(courses.data.results);
    }

    async function add_course(event: MouseEvent<HTMLButtonElement>) {
        const idx_str = (event.currentTarget.getAttribute("data-idx"));
        let course: Course;
        if (!idx_str) return;

        course = course_response_list[parseInt(idx_str)];
        const already_added = cart_list.some(cart_course => cart_course.course_code === course.course_code)
        if (already_added) return;

        set_cart_list([...cart_list, course])
    }

    async function remove_course(event: MouseEvent<HTMLButtonElement>) {
        const course_code = (event.currentTarget.getAttribute("id"));
        if (!course_code) return;

        const new_cart_list = cart_list.filter((course) => {
            if (course.course_code !== course_code) return course;
        });

        set_cart_list(() => new_cart_list);
    }

    const empty_list: Course[] = [];
    const [course_response_list, set_course_response_list] = useState(empty_list)
    const [cart_list, set_cart_list] = useState(empty_list)



    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex col-12 col-md-8 justify-content-between flex-wrap">

                <CourseSearch get_courses={get_courses} />

                <CourseMotion>
                    <SearchResultList add_course={add_course} courses={course_response_list} />
                </CourseMotion>
            </div>

            <div className="d-flex col-4 justify-content-around">
                <Cart remove_course={remove_course} cart_list={cart_list} />
            </div>
        </div>
    )
}