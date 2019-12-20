import React from 'react'

class Menu extends React.Component {
    render() {
        return(
        <nav>
            <ul>
                <li>
                    <button onClick={this.props.handleClick}>
                        Click ME
                    </button>

                    <select name="colors" onChange={this.props.changeColor}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="pink">pink</option>
                    </select> 
                </li>
            </ul>
        </nav>
        )
    }
}

export default Menu