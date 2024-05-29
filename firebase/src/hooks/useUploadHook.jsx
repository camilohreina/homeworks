import { useState } from "react";
import { getAll, upload } from "../firebase/files";
import {getDownloadURL, getStorage, ref, deleteObject} from "firebase/storage";

export const useUploadHook = () => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        const uploadTask = upload(file);
        uploadTask.on (
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100  
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                setFiles((list) => [...list, url]);
            }
        );
    }

    const handleGetAll = async () => {
        const {items} = await getAll();
        items.forEach( async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            setFiles((list) => [...list, url]);
        });
    }

    const handleDelete = async (fileName) => {
        const storage = getStorage();
        const imageRef = ref(storage, fileName);

        try {
            await deleteObject(imageRef);
            console.log(`Image ${fileName} deleted successfully`);
            setFiles((list) => list.filter((item) => item !== fileName));
        } catch (error) {
            console.error(`Failed to delete image ${fileName}`, error);
        }
    }
    
    return {
        files,
        file,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleDelete
    }

}