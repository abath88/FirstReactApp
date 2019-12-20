function Hero() {
    return  (
        <>
            <div className="hero">
                <h1>Style guide</h1>
            </div>
            <style jsx>{`
                .hero {
                    margin: 0;
                    background-color: rgba(0, 0, 150, .2); 
                    height: 15em;
                }
            `}</style>
        </>
    )
}

export default Hero