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

    changeFont = () => { 
        this.setState({
            font: this.state.font == 'serif' ? 
                'sans-serif' : 
                'serif'
        })
    }

    changeColor(e) {
        
        switch(e.target.value) {
            case 'red':
                this.setState({
                    color: [
                        'rgba(255,0,0,.3',
                        'rgba(255,0,0,.8)',
                        'red'
                        
                    ]
                })
            break;
            case 'green':
                this.setState({
                    color: [
                        'rgba(0,255,0,.3',
                        'rgba(0,255,0,.8)',
                        'green'
                        
                    ]
                })
            break;
            default: 
                this.setState({
                    color: [
                        'rgba(255,0,0,.3',
                        'rgba(255,0,0,.8)',
                        'red' 
                    ]
                })
        }
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