import { useEffect, useState } from 'react';

const Home = () => {
    const [toDo, setToDo] = useState(null)

    useEffect(() => {
        const fetchToDo = async () => {
            const res = await fetch('/api/todolist')    //proxy all requests to localhost:4000(from package.json)
            const json = await res.json()

            if (res.ok){
                setToDo(json)
            }
        }

        fetchToDo()
    }, [])

    return (
        <div className="home">
            <div className="todos">
                {toDo && toDo.map((toDo) => (           //only when toDo is not null, toDo.map() will be called
                    <p key={toDo.id}>{toDo.title} - {toDo.activity}</p>
                ))}
            </div>
        </div>
    )
}

export default Home;