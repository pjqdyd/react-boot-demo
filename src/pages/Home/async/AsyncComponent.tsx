import React, {Component} from 'react';
import type { HomeComponentProps } from "@/pages/Home/types";

/**
 * 首页异步组件
 */
class AsyncComponent extends Component<HomeComponentProps, never> {
    constructor(props: HomeComponentProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>HomeComponentThree {this.props.title}</h2>
            </div>
        );
    }
}

export default AsyncComponent;
