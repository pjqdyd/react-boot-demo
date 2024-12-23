import { Provider } from "@/react-boot.ts";

/**
 * 工具类版本二
 */
@Provider({ name: 'Utils', version: '2.0.0' })
class Utils {
    static getDate(): string {
        return `${new Date().toLocaleString()} v2.0.0`
    }
}

export default Utils
