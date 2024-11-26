import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import React, { Suspense } from "react";
import { Consumer } from "@/react-boot.ts";
import { UtilsType } from "@/utils/interface.ts";


interface IState {
    visible: boolean
}

class Home extends React.Component<never, IState> {

    @Consumer({ name: 'HomeComponentTwo', version: '1.0.0' })
    private homeComponentTwo: React.ComponentType;

    @Consumer({ name: 'HomeComponentThree', version: '1.0.0' })
    private homeComponentThree: () => Promise<{ default: React.ComponentType }>;

    @Consumer({ name: 'Utils', version: '1.0.0' })
    private utils: UtilsType

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
                <p>{this.utils.getDate()}</p>
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
