// import { useHover } from "react-use"
import { useHover } from "./hooks/useHover";

export default function Hover() {
    const element = (hovered: boolean) => (
        <div>
            Hover me! 
            <div>{hovered && '↓'}</div>
        </div>
    )
    const [hoverable, hovered] = useHover(element);

    return (
        <div>
            {hoverable}
            <div>{hovered ? 'HOVERED' : ''}</div>
        </div>
    )
}