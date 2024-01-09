import { MouseEvent } from "react"

export default function (props: { pages_list: JSX.Element[], current_idx: number, choose_table: (event: MouseEvent<HTMLAnchorElement>) => void, prev_table: (event: MouseEvent<HTMLAnchorElement>) => void, next_table: (event: MouseEvent<HTMLAnchorElement>) => void}){
    return <nav style={{ margin: "0 0" }} aria-label="Generated schedules page">
        <ul className="pagination justify-content-center flex-column">
            <li className={(props.current_idx == 1 ? "disabled " : "") + "page-item"}>
                <a className="page-link" onClick={props.prev_table} tabIndex={-1} aria-disabled="true">&laquo;</a>
            </li>

            {...props.pages_list.map((_page, idx) => {
                return <li className="page-item">
                    <a className={(idx + 1 === props.current_idx ? "active " : "") + "page-link"} onClick={props.choose_table}> {idx + 1}</a></li>
            })}

            <li className={(props.current_idx == props.pages_list.length ? "disabled " : "") + "page-item"}>
                <a onClick={props.next_table} className="page-link">&raquo;</a>
            </li>
        </ul>
    </nav>
}