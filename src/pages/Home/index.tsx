import React, { Suspense } from "react";
import { Consumer } from "@/react-boot.ts";
import viteLogo from "/vite.svg";
import reactBootLogo from "@/assets/react-boot.svg";
import type { UtilsType } from "@/utils/interface.ts";
import type { HomeComponentProps } from "@/pages/Home/types";

interface IState {
    visible?: boolean
}

/**
 * 首页
 */
class Home extends React.Component<never, IState> {

    @Consumer({name: 'HomeComponent'})
    private HomeComponent: React.ComponentClass<HomeComponentProps>;

    @Consumer({name: 'HomeComponentTwo'})
    private HomeComponentTwo: React.FunctionComponent<HomeComponentProps>;

    @Consumer({name: 'AsyncComponent'})
    private AsyncComponent: () => Promise<{ default: React.ComponentClass<HomeComponentProps> }>;

    @Consumer({name: 'Utils', version: '1.0.0'})
    private Utils: UtilsType

    @Consumer({name: 'Utils', version: '2.0.0'})
    private UtilsTwo: UtilsType

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        // 未来某一时刻加载异步组件
        setTimeout(() => {
            this.setState({visible: true})
        }, 5000)
    }

    render() {
        const {
            HomeComponent,
            HomeComponentTwo,
            Utils,
            UtilsTwo,
        } = this;
        const AsyncComponent = React.lazy(this.AsyncComponent);

        return (
            <React.Fragment>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactBootLogo as string} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>React Boot</h1>
                <div className="card">
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>

                <p>{Utils.getDate()}</p>

                <p>{UtilsTwo.getDate()}</p>

                <HomeComponent title="组件一"/>

                <HomeComponentTwo title="组件二"></HomeComponentTwo>

                {this.state.visible && (
                    <Suspense fallback={<div>loading...</div>}>
                        <AsyncComponent title="异步组件" />
                    </Suspense>
                )}
            </React.Fragment>
        );
    }
}

export default Home
