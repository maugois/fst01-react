import { useState } from "react";

const UseStateComponent = () => {

    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(true);

    function increment() {
        setCount(count + 1);
        setDisableButton(false);
    }
    
    function decrement() {
        setCount((prevState) => {
            prevState === 1 ? setDisableButton(true) : setDisableButton(false);

            return prevState - 1;
        });
    }

    return (
        <>
            <div>
                <h1>UseState</h1>

                {/* <h1 style="margin-left: 90px, color: red">{count}</h1> */}
                <h2 style={{ marginLeft: "90px", color: "red" }}>{count}</h2>

                <button onClick={increment} style={{ cursor: "pointer" }}>Aumentar</button>
                <button onClick={decrement} disabled={disableButton} style={{ cursor: disableButton ? "not-allowed" : "pointer" }}>Diminuir</button>
            </div>
        </>
    )
};

export default UseStateComponent;