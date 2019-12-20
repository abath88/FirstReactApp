import Hero from "../Components/Hero"
import Container from "../Components/Container"


function Home() {
    return (
        <>
            <Hero />
        
            <Container />
            <style jsx global>{`
                html {
                    font-size: 62.5%;
                    font-family: "Roboto", sans-serif;
                }
                
                body { 
                    margin: 0;
                }
            `}</style>
        </>
        )
}

export default Home