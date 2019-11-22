import Hero from "../Components/Hero"
import Section from "../Components/Section"
import Headers from "../Components/Headers"
import Paragraph from "../Components/Paragraph"
import Color from "../Components/Color"


function Home() {
    return (
        <>
            <Hero />
            <Section title="01. Typography">
                <Headers />
                <Paragraph />
            </Section>
            <Section title="02. Color">
                <Color colors={["white", "black-19", "black-39", "black-59", "black-79", "black-100"]} />
            </Section>
        </>
        )
}

export default Home