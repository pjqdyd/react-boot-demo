import type { Modules } from "@pjqdyd/react-boot";

/**
 * 扫描的依赖模块
 */
const modules: Modules = {
    ...import.meta.glob(['./pages/Home/components/HomeComponent.tsx'], { eager: false }),
    ...import.meta.glob(['./pages/Home/components/HomeComponentTwo.tsx'], { eager: true }),
};

export default modules
