import { useState } from "react";
import "../../App.css";
interface HelloWorldProps {
    title: string;
    count_share: number;
    onShareIncrement: () => void;
    render: (count: number) => React.ReactNode;
}
export function HelloWorld(props: HelloWorldProps) {
    const [count, setCount] = useState(0);
    const { title, render, count_share, onShareIncrement } = props;
    return (
        <div>
            <h1>Hello World</h1>
            <p>Count: {count}</p>
            <p>共享 count_share: {count_share}</p>
            <button onClick={() => setCount(count + 1)}>{title}</button>
            <button onClick={onShareIncrement}>增加共享 count_share</button>
            {render(count)}
        </div>
    )
}
