import { useEffect } from "react";
import { useCookie } from "react-use";
// import { useCookie } from "./hooks/useCookie";

export default function Cookie() {
    const [value, updateCookie, deleteCookie] = useCookie('kkkk');

    useEffect(() => {
        deleteCookie();
    }, []);

    const updateCookieHandler = () => {
        updateCookie('kaneki');
    };

    return (
        <div>
            <p>cookie值: {value}</p>
            <button onClick={updateCookieHandler}>更新 cookie</button>
            <br />
            <button onClick={deleteCookie}>删除 cookie</button>
        </div>
    )
}