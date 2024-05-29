import React, { useEffect, useState } from "react";
import {useCollection} from "./firebase/firestore";

export const Crud = () => {
    const [user, setUser] = useState({name: ""});
    const {update, deleteUser, add, getAll, isPending, results} = useCollection("users");

    const getAllDocs = async() => {
        await getAll([]);
    }

    const save = async() => {
        await add(user);
        await getAllDocs();
    }

    const handleSetUser = (event) => {
        setUser({ name: event.target.value });
    }

    const handleUpdate = async(doc, updatedUser) => {
        await update(doc, updatedUser);
        await getAllDocs();
    }

    const handleDelete = async(doc) => {
        await deleteUser(doc);
        await getAllDocs();
    }

    useEffect(() => {
        getAllDocs();
    }, []);

    return (
        <>
            <input type="text" onChange={handleSetUser} value={user.name} />
            <button onClick={save} >SAVE</button>
            {results.map(result => (
                <div key={result.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{result.name}</span>
                    <button onClick={() => handleUpdate(result.id, user)}>UPDATE</button>
                    <button onClick={() => handleDelete(result.id)}>DELETE</button>
                </div>
            ))}
        </>
    );
}