import { withProvider } from "@/react-boot.ts";
import type { Modules, AsyncModule} from "@pjqdyd/react-boot";

// 异步模块
const asyncComponent = () => import('./pages/Home/components/HomeComponentThree.tsx');

/**
 * 扫描的依赖模块
 * 同步导入 eager: true
 * 异步导入 eager: false
 */
export const modules: Modules = {
    ...import.meta.glob(['./pages/Home/components/HomeComponent.tsx'], { eager: true }),
    ...import.meta.glob(['./pages/Home/components/HomeComponentTwo.tsx'], { eager: true }),
    ...import.meta.glob('./utils/*.ts', { eager: true }),
    'HomeComponentThree': withProvider<AsyncModule>({ name: 'HomeComponentThree', version: '1.0.0', isAsync: true })(asyncComponent),
};

export default modules
