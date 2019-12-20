import { Component } from 'react'

class Headers extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="headers"> 
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <style jsx>{`
                    h1, h2, h3, h4, p {
                        font-family: ${this.props.font};
                    }
                    .headers {
                        width: 40em;
                        margin: 0 2em;
                    }

                    h1 {
                        font-size: 5.6em; 
                        line-height: 1em; 
                        margin: 0;
                    }
                    h2 {
                        font-size: 4.2em;
                        line-height: 1.2em; 
                        margin: 0;
                    }
                    h3 {
                        font-size: 3.15em;
                        line-height: 1.3em; 
                        margin: 0;
                    }
                    h4 {
                        font-size: 2.3625em;
                        line-height: 1.4em; 
                        margin: 0;
                    }
                    p {
                        font-size: 1.8em;
                        margin-top: .5em;
                    }
                `}</style>
            </div>
        )
    }
}

export default Headers