import { withProvider } from "@/react-boot.ts";
import type { Modules, AsyncModule} from "@pjqdyd/react-boot";

/**
 * 扫描的依赖模块
 * 同步导入 使用import.meta.glob {eager: true}
 * 异步导入 使用withProvider + import()
 */

// 定义异步模块
const asyncComponent = () => import('./pages/Home/async/AsyncComponent.tsx');

// 导出模块
export const modules: Modules = {
    // 同步模块
    ...import.meta.glob(['./pages/Home/components/*.tsx'], { eager: true }),
    ...import.meta.glob('./utils/*.ts', { eager: true }),
    // 异步模块
    'AsyncComponent': withProvider<AsyncModule>({ name: 'AsyncComponent', isAsync: true })(asyncComponent),
};

export default modules
