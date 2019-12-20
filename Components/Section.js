import Title from "./Title"

function Section(props) {
    return (
        <section className="container">
            <Title title={props.title}/>
            <div className="content">
                {props.children}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: row;
                }
                
                .content {
                    display: flex;
                    flex-direction: row;
                    padding-top: 4em;
                    flex-wrap: wrap;
                }
            `}</style>
        </section>
    )
}
export default Section