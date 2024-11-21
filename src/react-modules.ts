
import { withAsyncModules } from "@pjqdyd/react-boot";
import type { Modules } from "@pjqdyd/react-boot";

/**
 * 扫描的依赖模块
 * 同步导入 eager: true
 * 异步导入 eager: false
 */
export const modules: Modules = {
    ...import.meta.glob(['./pages/Home/components/HomeComponent.tsx'], { eager: true }),
    ...import.meta.glob(['./pages/Home/components/HomeComponentTwo.tsx'], { eager: true }),
    ...withAsyncModules([
        {
            module: import.meta.glob(['./pages/Home/components/HomeComponentThree.tsx'], { eager: false }),
            name: 'HomeComponentThree',
            version: '1.0.0',
            description: '首页组件3',
        }
    ]),
};

export default modules
