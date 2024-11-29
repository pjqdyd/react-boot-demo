import React, { FunctionComponent, useState } from 'react';
import { useConsumer, withProvider } from "@/react-boot.ts";

export interface HomeComponentProps {
    title: string;
}

const HomeComponent = (props: HomeComponentProps) => {
    const [title] = useState('标题');
    const [HomeComponentTwo] = useConsumer<React.ComponentType>({ name: 'HomeComponentTwo', version: '1.0.0' });
    return (
        <div>
            <h2>HomeComponent {title} {props.title}</h2>
            <HomeComponentTwo />
        </div>
    );
}
export default withProvider<FunctionComponent>({ name: 'HomeComponent', version: '1.0.0' })(HomeComponent);
