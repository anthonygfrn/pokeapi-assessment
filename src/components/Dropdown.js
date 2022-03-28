export const Dropdown = ({display, datas, type}) => {
    switch (type) {
        case "Types":
            datas = datas.map(data => data.type.name)
            break;
        case "Moves":
            datas = datas.map(data => data.move.name)
            break;
    
        default:
            break;
    }

    if (display) {
        return (
            <div className="dropdown">
                {datas.map(data => {
                    return (
                        <div className="data" key={data}>
                            {data}.
                        </div>
                    )
                })}
            </div>
        )
    } else return null
}