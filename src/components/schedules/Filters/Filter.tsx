export default function Filter(props: {name: string, val: string, fun: (event_type: string) => void}){
    return (
        <div className="form-check p-3 border-3 border border-3 border-secondary rounded ms-2 mb-3">
            <input className="form-check-input fs-4" type="checkbox" value={props.val} id={props.val} onClick={() => props.fun(props.val)} />
            <label className="form-check-label" htmlFor={props.val}>
                {props.name}
            </label>
        </div>
    )
}