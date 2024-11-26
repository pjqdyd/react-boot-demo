import { Provider } from "@/react-boot.ts";

/**
 * 工具类
 */
@Provider({ name: 'Utils', version: '1.0.0' })
class Utils {
    static getDate(): string {
        return new Date().toLocaleString()
    }
}

export default Utils
