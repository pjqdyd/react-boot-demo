import React, { Component } from 'react';
import { Provider } from "@/react-boot.ts";
import type { HomeComponentProps } from "@/pages/Home/types";

/**
 * 首页组件
 */
@Provider({ name: 'HomeComponent' })
class HomeComponentTwo extends Component<HomeComponentProps, never> {
    constructor(props: HomeComponentProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>HomeComponent {this.props.title}</h2>
            </div>
        );
    }
}

export default HomeComponentTwo;
