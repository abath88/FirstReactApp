function Title(props) {
    /*
    font-size: 2em;
    font-family: "Courier New";
    font-weight: 300;
    text-align: center;
    padding-top: 2.6em;
    */

    let fontS = "4.2em"
    let header2 = {
                    fontSize: "2em",
                    fontFamily: "Courier New",
                    fontWeight: "300",
                    textAlign: "center",
                    paddingTop: "2.6em"
                }

    return (
        <div style={{ width: "25em", backgroundColor: "rgba(0,0,150,.1)"}}>
            <h2 style={header2}>
                {props.title}
            </h2>
        </div>
    )
}

export default Title