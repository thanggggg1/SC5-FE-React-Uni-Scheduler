import { useLocation } from "react-router-dom"
import FilledTableRow from "./FilledTableRow";
import EmptyTableRow from "./EmptyTableRow";
import Table from "./Table";
import { MouseEvent, useState } from "react";
import { ScheduleAPI, day_hours, week } from "../courses/interfaces";
import TablesPagination from "./TablesPagination";
import EmptyCourseList from "./EmptyCourseList";
import { empty_days, no_early, no_late } from "./Filters/filter_functions";
import FilterList from "./Filters/FilterList";
import NoTablesMatched from "./NoTablesMatched";


const hour_to_idx = {
    hour_1_section: "8:30:00",
    hour_2_section: "9:30:00",
    hour_3_section: "10:30:00",
    hour_4_section: "11:30:00",
    hour_5_section: "12:30:00",
    hour_6_section: "13:30:00",
    hour_7_section: "14:30:00",
    hour_8_section: "15:30:00",
    hour_9_section: "16:30:00",
    hour_10_section: "17:30:00",
    hour_11_section: "18:30:00",
    hour_12_section: "19:30:00",
};


interface FilterOptions {
    empty: number;
    late: number;
    early: number;
}




function generate_all(data: ScheduleAPI, filter_options: FilterOptions): JSX.Element[] {

    let tables: JSX.Element[] = [];
    let filtered_data: week[] = JSON.parse(JSON.stringify(data.results));

    if (filter_options.empty) filtered_data = empty_days(filtered_data);
    if (filter_options.late) filtered_data = no_late(filtered_data);
    if (filter_options.early) filtered_data = no_early(filtered_data);

    if (filtered_data.length > 20) filtered_data = filtered_data.slice(0, 20);

    const colors = ["bg-orange", "bg-sky", "bg-green", "bg-yellow", "bg-pink", "bg-purple"];
    const rand_color = () => colors[Math.floor(Math.random() * colors.length)];

    for (const schedule of filtered_data) {
        let rows: JSX.Element[] = [];
        // console.log(schedule)
        const days = Object.keys(schedule);
        const hours = Object.keys(schedule["saturday"]);

        for (const hour of hours) {
            let row: JSX.Element[] = [<td className="align-middle">{hour_to_idx[hour as keyof day_hours]}</td>]; //`<tr>

            for (const day of days) {
                const section = schedule[day as keyof week][hour as keyof day_hours];
                if (section) {
                    row.push(<FilledTableRow color={rand_color()} section={section} />);

                } else {
                    row.push(<EmptyTableRow />);
                }
            }

            rows.push(<tr>{...row}</tr>);
        }

        tables.push(<Table rows={rows} />);
    }

    return tables;
}



// const needed_courses = [/* "AIS495", */ "AIS411",  "CSCI461",  "CSCI410" , "SPAN101", "AIS412"];
// const needed_courses = ["ECEN433", "ECEN422", "ECEN430", "HUMA002"];


export default function Schedules() {
    const location = useLocation();
    try {
        console.log(location.state.data)
    }
    catch (e: unknown) {
        return <EmptyCourseList />
    }

    const data = location.state.data;

    const [filter_options, set_filter_options] = useState({ empty: 0, late: 0, early: 0 })
    const all_tables = generate_all(data, filter_options);
    const [current_idx, set_current_idx] = useState(1)

    const handle_filter = (event_type: string) => {
        console.log(event_type)
        if (event_type === "empty") filter_options.empty = (filter_options.empty === 0 ? 1 : 0);
        if (event_type === "early") filter_options.early = (filter_options.early === 0 ? 1 : 0);
        if (event_type === "late") filter_options.late = (filter_options.late === 0 ? 1 : 0);

        set_filter_options({ ...filter_options })
    }

    let pages_list = all_tables.map((_table, idx) => {
        return <li className="page-item">
            <a className={(idx === 0 ? "active " : "") + "page-link"} onClick={choose_table}> {idx + 1}</a></li>
    });

    function choose_table(event: MouseEvent<HTMLAnchorElement>) {
        const chosen_idx = parseInt(event.currentTarget.innerHTML);
         set_current_idx(() => chosen_idx)
    }

    function next_table(_event: MouseEvent<HTMLAnchorElement>) {
        console.log(current_idx)
        if (current_idx >= pages_list.length) return;
        set_current_idx((prev_idx) => prev_idx + 1)
    }

    function prev_table(_event: MouseEvent<HTMLAnchorElement>) {
        if (current_idx <= 1) return;
        set_current_idx(() => current_idx - 1)
    }



    return (
        // <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row justify-content-center overflow-hidden">
                

            {(all_tables.length === 0 ? <NoTablesMatched /> : <>
                <TablesPagination pages_list={pages_list} current_idx={current_idx} choose_table={choose_table} prev_table={prev_table} next_table={next_table}></TablesPagination>
                {all_tables[current_idx - 1]}
            </>)}
                {/* {data && console.log(data)} */}
            <FilterList fun={handle_filter} />
            </div>
        // </div>
    )
}