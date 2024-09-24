// 与 useMountedState 类似
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function useLifecycles(mount: Function, unmount?: Function) {
    useEffect(() => {
        if(mount) {
            mount();
        }
        return () => {
            if(unmount) {
                unmount();
            }
        }
    }, []);
}