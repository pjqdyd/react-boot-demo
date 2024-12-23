import React, { FunctionComponent } from 'react';
import { useConsumer, withProvider } from "@/react-boot.ts";
import type { HomeComponentProps } from "@/pages/Home/types";

/**
 * 首页组件2
 * @param props
 * @constructor
 */
const HomeComponentTwo = (props: HomeComponentProps) => {

    // 获取HomeComponent组件
    const [HomeComponent] = useConsumer<React.ComponentClass<HomeComponentProps>>({ name: 'HomeComponent' });

    return (
        <div>
            <h2>HomeComponentTwo {props.title}</h2>

            <div style={{ fontSize: '14px', color: '#999999' }}>
                <HomeComponent title="组件二中使用" />
            </div>
        </div>
    );
}
export default withProvider<FunctionComponent>({ name: 'HomeComponentTwo' })(HomeComponentTwo);
