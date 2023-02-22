import { Fragment } from "react"
import AboutMe from "../about-me/about-me.component"
import Intro from "../intro/intro.component"


const Home = () => {
    return (
        <Fragment>
            <Intro />
            <AboutMe />
        </Fragment>

    )
}

export default Home