import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import NotFoundComponent from "@/pages/NotFound";
import React from "react";
import { Consumer } from "@/react-boot.ts";

const Aaa = NotFoundComponent;

class Home extends React.Component<never, never> {

    @Consumer({ name: 'HomeComponentTwo', version: '1.0.0' })
    private homeComponentTwo: React.ComponentType;

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const HomeComponentTwo = this.homeComponentTwo;
        return (
            <>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo as string} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>HOME</h1>
                <div className="card">
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <Aaa></Aaa>
                <HomeComponentTwo></HomeComponentTwo>
                {/*<HomeComp title="home"></HomeComp>*/}
            </>
        );
    }
}

export default Home
