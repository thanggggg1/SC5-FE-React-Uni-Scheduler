import "./Table.css"

export default function Table (props: {rows: JSX.Element[]}){
    return (
        <div>
            <div className="d-block">

                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">Time
                                </th>
                                <th className="text-uppercase">Saturday</th>
                                <th className="text-uppercase">Sunday</th>
                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {...props.rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}