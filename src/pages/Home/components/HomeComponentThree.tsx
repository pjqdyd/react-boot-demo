import React, {Component} from 'react';

export interface HomeComponentProps {
    title: string;
}

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
