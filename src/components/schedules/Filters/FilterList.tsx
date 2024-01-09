import Filter from "./Filter"

export default function FilterList(props: { fun: (event_type: string) => void }){
    return <div className="ms-4 mb-4">
        <Filter name="At least one empty day" val="empty" fun={props.fun}/>
        <Filter name="No early slots" val="early" fun={props.fun} />
        <Filter name="No late slots" val="late" fun={props.fun} />
    </div>
}