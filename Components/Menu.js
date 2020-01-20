import React from 'react'
//https://github.com/abath88/FirstReactApp

var obj = {
    fonts: [
        "Times New Roman", "Arial", "Calibri", "Comic Sans MS", "Impact"
    ]
}

class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return(
        <nav className="menu">
            <div className="burger" onClick={this.handleClick}>
                <span className={this.state.show && 'show'}/>
            </div>
            <ul>
                <li>
                    <select name="colors" onChange={this.props.changeFont}>
                        {obj.fonts.map( font => 
                            <option 
                                style={{fontFamily: font}} 
                                value={font}
                            >
                                {font}
                            </option>
                        )}   
                    </select> 
                </li>
                <li>
                    <input type="color" onChange={this.props.changeColor}/>
                </li>
            </ul>
            <style jsx>{`
                .menu {
                    position: fixed;
                    right: 0;
                    background-color: white;

                    border-top: 2px solid black;
                    border-left: 2px solid black;
                    border-bottom: 2px solid black;
                }

                .menu > ul {
                    list-style: none;
                    display: ${this.state.show ? 'block' : 'none'};
                }

                .menu > ul > li {
                    padding: 30px;
                }

                .burger {
                    position: relative;
                    width: 52px;
                    height: 52px;

                    cursor: pointer;
                }

                .burger span{
                    position: absolute;
                    top: 25px;
                    margin-left: 12px;
                    width: 30px;
                    height: 2px;
                    display: block;
                    background-color: black;
                    border-radius: 100px;
                }

                .burger span:before{
                    content:"";
                    position: absolute;
                    left: 0px;
                    top: -10px;
                    width: 30px;
                    height: 2px;
                    background-color: black;
                    border-radius: 100px;
                }

                .burger span:after{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 30px;
                    height: 2px;
                    background-color: black;
                    border-radius: 100px;
                }

                @keyframes burder-top{
                    0% {
                        top: -15px;
                    }

                    50% {
                        top: 0;
                    }

                    100% {
                        top: 0;
                    }
                }

                @keyframes burder-bottom{
                    0% {
                        top: 15px;
                        transform: rotate(0deg);
                    }

                    50% {
                        top: 0;
                        transform: rotate(0deg);
                    }

                    100% {
                        top: 0;     
                    }
                }
                .burger span.show {
                    background-color: transparent;
                }

                .burger span.show:after {
                    transform: rotate(45deg);
                    
                    transition: all 280ms ease-in-out 280ms; 
                    top: 0; 
                    animation: 560ms ease-in-out burder-bottom;
                }

                .burger span.show:before {
                    transform: rotate(-45deg);
                    transition: all 280ms ease-in-out 280ms; 
                    top: 0; 
                    animation: 560ms ease-in-out burder-top;
                }
            `}</style>
        </nav>
        )
    }
}

export default Menu