import { useRef } from "react";
// import { useScrolling } from "react-use";
import { useScrolling } from "./hooks/useScrolling";

export default function Scrolling() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrolling = useScrolling(scrollRef);

    return (
        <>
            <div>{scrolling? '滚动中...' : '静止——'}</div>
            <div ref={scrollRef} style={{height: '200px', width: '200px', overflow: 'auto'}}>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
                <div>kkkkkk</div>
            </div>
        </>
    )
}