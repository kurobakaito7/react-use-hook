import { useLifecycles } from "react-use";
// import { useLifecycles } from "./hooks/useLifecycles";

export default function Lifecycles() {
    useLifecycles(() => console.log('MOUNTED'),() => console.log('UNMOUNTED'));

    return null;
}