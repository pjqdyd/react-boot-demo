import { ReactBoot } from '@pjqdyd/react-boot'

const {
    createApp,
    Application,
    Provider,
    Consumer,
} = ReactBoot({
    name: Symbol('app'),
    description: '我的app',
    modules: import('@/react-modules.ts'),
    onLoad: () => {}
});

export { Application, Provider, Consumer, createApp }


