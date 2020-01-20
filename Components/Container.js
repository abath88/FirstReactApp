import { Component } from 'react'
import Section from "./Section"
import Color from "./Color"
import Headers from "./Headers"
import Paragraph from "./Paragraph"

import Menu from "./Menu"

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            font: 'sans-serif',
            color: [
                'rgba(255,0,0,.3',
                'rgba(255,0,0,.8)',
                'red'  
            ]
        }

        this.changeColor = this.changeColor.bind(this)
    }

    changeFont = (event) => {    
        this.setState({
            font: event.target[event.target.selectedIndex].value
        })
    }

    changeColor(e) {
        console.log(e.target.value)
        let col = []
        for(let i=1; i < e.target.value.length; i+=2 ) {
            let val1 = parseInt(e.target.value[i], 16)
            let val2 = parseInt(e.target.value[i+1], 16)
           

            val1 = val1 * 16
            col.push(val1 + val2)
        }

        console.log(col)

        this.setState({
            color: [
                `rgba(${col[0]}, ${col[1]}, ${col[2]},.3`,
                `rgba(${col[0]}, ${col[1]}, ${col[2]},.8)`,
                e.target.value 
            ]
        })
    }

    render() {
        return (
            <>
                <Menu changeFont={this.changeFont} changeColor={this.changeColor}/>
                <Section title="01. Typography">
                    <Headers font={this.state.font}/>
                    <Paragraph font={this.state.font}/>
                </Section>
                <Section title="02. Color">
                    <Color colors={["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgb(0,0,0)"]} />
                    <Color colors={this.state.color} />
                </Section>
            </>
        )
    }
}

export default Container