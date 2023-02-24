import { Fragment } from "react"
import AboutMe from "../about-me/about-me.component"
import Intro from "../intro/intro.component"
import Project from "../projects/project.component"
import Skills from "../skills/skills.component"


const Home = () => {
    return (
        <Fragment>
            <Intro />
            <AboutMe />
            <Project />
            <Skills />
        </Fragment>

    )
}

export default Home