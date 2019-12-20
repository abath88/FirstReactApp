function Paragraph(props) {
    return (
        <div className="paragraph">
            <p>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <style jsx>{`
                .paragraph {
                    width: 40em;
                    font-size: 1.6em;
                    font-family: ${props.font}
                }
            `}</style>
        </div>
    )
}

export default Paragraph