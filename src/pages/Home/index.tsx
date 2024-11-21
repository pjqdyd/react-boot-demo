import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import NotFoundComponent from "@/pages/NotFound";
import React, {Suspense} from "react";
import { Consumer } from "@/react-boot.ts";

const Aaa = NotFoundComponent;

interface IState {
    visible: boolean
}

class Home extends React.Component<never, IState> {

    @Consumer({ name: 'HomeComponentTwo', version: '1.0.0' })
    private homeComponentTwo: React.ComponentType;

    @Consumer({ name: 'HomeComponentThree', version: '1.0.0' })
    private homeComponentThree: () => Promise<{ default: React.ComponentType }>;

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 3000)
    }

    render() {
        const HomeComponentTwo = this.homeComponentTwo;
        const HomeComponentThree = React.lazy(this.homeComponentThree);

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
                {this.state.visible && (
                    <Suspense fallback={<div>loading...</div>}>
                        <HomeComponentThree></HomeComponentThree>
                    </Suspense>
                )}
            </>
        );
    }
}

export default Home
