function Color (props) {
    let tab = props.colors;
    console.log(tab)
    return (
        <div className="color">
            {tab.map((item) => {
                return <div className={`box ${item}`}></div>
            })}
        </div>
    )
}

export default Color