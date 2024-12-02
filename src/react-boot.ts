import React from "react";
import { ReactBoot } from '@pjqdyd/react-boot'

const {
    createApp,
    Application,
    Provider,
    Consumer,
    withProvider,
    useConsumer,
    destroyApp
} = ReactBoot({
    react: React,
    name: Symbol('app'),
    description: '我的app',
    onLoad: () => {}
});

export { Application, Provider, Consumer, createApp, withProvider, useConsumer, destroyApp }


