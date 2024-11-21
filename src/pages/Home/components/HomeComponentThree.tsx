import React, {Component} from 'react';
import { Provider } from "@/react-boot.ts";

export interface HomeComponentProps {
    title: string;
}

@Provider({ name: 'HomeComponentThree', version: '1.0.0' })
class HomeComponentThree extends Component<HomeComponentProps, never> {
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

export default HomeComponentThree;
