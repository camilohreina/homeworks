import React, {useEffect} from "react";
import {useUploadHook} from "./hooks/useUploadHook"

export const Upload = () => {
    
    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll, 
        handleDelete
    } = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    return (
        <div>
            <input type="file" onChange={handleChange} accept="" />
            <button onClick={() => handleUpload()} >UPLOAD</button>

            <p> {percent} "% DONE"</p>
            {
                files.map((item, key) =>{
                    return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img width="100px" src={item} />
                            <button onClick={() => handleDelete(item)}>DELETE</button>
                        </div>
                    )
                })
            }
        </div>
    )
}