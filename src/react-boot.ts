import {ReactBoot} from '@pjqdyd/react-boot'

const {
    createApp,
    Application,
    Provider,
    Consumer,
} = ReactBoot({
    name: 'app',
    description: '我的app',
    onLoad: () => {}
});

export { Application, Provider, Consumer, createApp }


