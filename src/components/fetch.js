import React, { useEffect, useState } from "react";
import Loader from "./loader";

const FetchExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            console.log(json);
            setData(json);
            setLoading(false);
        }
        fetchData();
        
    }, []);
    return loading ? <Loader /> : (
        <>
            <h1>Fetch Example</h1>
            <ul>
                {data?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default FetchExample;
