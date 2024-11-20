import React, {Component} from 'react';
import { Provider } from "@/react-boot.ts";

export interface HomeComponentProps {
    title: string;
}

@Provider({
    name: 'HomeComponent',
    asyncComponent: true
})
class HomeComponent extends Component<HomeComponentProps, never> {
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

export default HomeComponent;
