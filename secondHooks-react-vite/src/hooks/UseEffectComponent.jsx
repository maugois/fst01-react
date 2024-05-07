import { useState, useEffect } from "react";

const UseEffectComponent = () => {

    const [category, setCategory] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('useEffect');
    })

    useEffect(() => {
        console.log('useEffect');
    }, [])

    useEffect(() => {
        console.log('useEffect');
    }, [category])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com//${category}`)
        .then(response => response.json())
        .then(json => setData(json))
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

               <div>
                    {data.map(param => {
                        <ul>
                            <li key={param.id}>{param.name}</li>
                            <li key={param.id}>{param.body}</li>
                            <li key={param.id}>{param.userId}</li>
                        </ul>
                    })}
               </div>
            </div>
        </>
    )
}

export default UseEffectComponent;