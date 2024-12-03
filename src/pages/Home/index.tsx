import viteLogo from "/vite.svg";
import reactBootLogo from "@/assets/react-boot.svg";
import React, { Suspense } from "react";
import { Consumer } from "@/react-boot.ts";
import { UtilsType } from "@/utils/interface.ts";
import { HomeComponentProps } from "@/pages/Home/components/HomeComponent.tsx";


interface IState {
    visible?: boolean
    title?: string
}

class Home extends React.Component<never, IState> {

    @Consumer({ name: 'HomeComponent', version: '1.0.0' })
    private HomeComponent: HomeComponentProps;

    @Consumer({ name: 'HomeComponentTwo', version: '1.0.0' })
    private HomeComponentTwo: React.ComponentType;

    @Consumer({ name: 'HomeComponentThree', version: '1.0.0' })
    private HomeComponentThree: () => Promise<{ default: React.ComponentType }>;

    @Consumer({ name: 'Utils', version: '1.0.0' })
    private Utils: UtilsType

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            title: 'home'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 5000)
    }

    render() {
        const { HomeComponent, HomeComponentTwo, Utils} = this;
        const HomeComponentThree = React.lazy(this.HomeComponentThree);
        const { title } = this.state;

        return (
            <>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactBootLogo as string} className="logo react" alt="React logo"/>
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
                <p>{Utils.getDate()}</p>
                <button onClick={() => this.setState({ title: `home-new-${new Date().valueOf()}` })}>点击</button>
                <HomeComponent title={title} />
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
