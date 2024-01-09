import { hour_section } from "../courses/interfaces";

export default function FilledTableRow(props: { section: hour_section, color:  string }){
    return (
        <td title={props.section.course_code + " " + props.section.section_type + "-" + props.section.section_name}>
                <span className={props.color + " padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13"}>{props.section.course_code}</span>
                <div className="margin-10px-top font-size14">{props.section.section_type +"-"+ props.section.section_name}</div>
                {/* <div className="font-size13 text-light-gray">{props.section.instructor_username}</div> */}
            </td>
    )
}