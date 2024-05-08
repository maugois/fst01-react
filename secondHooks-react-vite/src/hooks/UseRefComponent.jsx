import { useState, useRef, useEffect } from "react";

const UseRefComponent = () => {

    const [name, setName] = useState('');
    const renders = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        renders.current++;
    })

    const handleFocusInput = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <div>
                <h1>UseRef</h1>

                <input
                    ref={inputRef} 
                    type="text" 
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)} 
                />

                <h3>Olá, meu nome é: {name}</h3>

                <p>Quantidade de renderização do componente: {renders.current}</p>

                <button onClick={handleFocusInput}>Focar</button>
            </div>
        </>
    )
}

export default UseRefComponent;