import { DataBase } from "./config";
import { collection, addDoc, query, where, getDocs, orderBy, updateDoc, deleteDoc, doc} from "firebase/firestore";
import {useState} from "react";

export const useCollection = (table) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const getAll = async (condition) => {
        setResults([]);
        let resDoc = null, q = null;
        if (condition && condition.length == 3) {
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        }else{
            q = query(collection(db, table));
        }

        resDoc = await getDocs(q);

        resDoc.forEach((doc) => {
            setResults(list => [...list, {id: doc.id, ...doc.data()}]);
        });
    }

    const add = async(doc) => {
        setError(null);
        setIsPending(true);

        try{
            let resDoc = await addDoc(collection(db, table), doc);
            console.log("Document written with ID: ", resDoc.id);
            setIsPending(false);
            return resDoc;
        }catch(err){
            console.log(err.message);
            setError('Could not send the message');
            setIsPending(false);
            return null;
        }
    }

    const update = async(id, newData) => {
        setError(null);
        setIsPending(true);

        if (id !== undefined) {
            try {
                const docRef = doc(db, table, id);
                await updateDoc(docRef, newData);
                console.log("Document updated with ID: ", id);
                setIsPending(false);
                return id;
            } catch(err) {
                console.log(err.message);
                setError('Could not update the document');
                setIsPending(false);
                return null;
            }
        } else {
            console.log("Document ID is undefined");
            setError('Document ID is undefined');
            setIsPending(false);
            return null;
        }
    }
    
    const deleteUser = async(id) => {
        setError(null);
        setIsPending(true);
    
        if (id !== undefined) {
            try {
                const docRef = doc(db, table, id);
                await deleteDoc(docRef);
                console.log("Document deleted with ID: ", id);
                setIsPending(false);
                return id;
            } catch(err) {
                console.log(err.message);
                setError('Could not delete the document');
                setIsPending(false);
                return null;
            }
        } else {
            console.log("Document ID is undefined");
            setError('Document ID is undefined');
            setIsPending(false);
            return null;
        }
    }

    return {results, error, isPending, getAll, add, update, deleteUser};
}   