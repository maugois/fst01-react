import { useState, useEffect } from "react";

const UseEffectComponent = () => {

    const [category, setCategory] = useState('');
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     console.log('useEffect');
    // })

    // useEffect(() => {
    //     console.log('useEffect');
    // }, [])

    // useEffect(() => {
    //     console.log('useEffect');
    // }, [category])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com//${category}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log("Error:", error))
    }, [category])

    return (
        <>
            <div>
               <h1>UseEffect</h1>

               <h2>{category}</h2>

               <div>
                   <button onClick={() => setCategory('posts')}>Posts</button>
                   <button onClick={() => setCategory('comments')}>Comments</button>
                   <button onClick={() => setCategory('todos')}>All</button>
               </div>

               <h2>{data.length} items</h2>

                {/* condição && execução */}
                <ul>
                    {data.map(param => (
                        <li key={param.id}>
                            <p>Id: {param.id}</p>
                            <p>Title: {param.title ? param.title : param.name}</p>
                        </li>
                    ))}
                </ul>

                {/* 
                <ul>
                    {data.map(param => {
                        return (
                            <li key={param.id}>
                                <p>Id: {param.id}</p>
                            </li>
                        )
                    })} 
                </ul>
                */}
            </div>
        </>
    )
}

export default UseEffectComponent;