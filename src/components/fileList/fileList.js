import React from "react";
import './fileList.css'
import FileCard from '../fileCard/card';
import './fileList.css';
import axios from "axios";

const FileList = ({files, removeFile}) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`${process.env.REACT_APP_BE_ROUTE}/delete?publicId=${_name}`)
        .then((res) => removeFile(_name))
        .catch((err) => console.error(err))
    }

    return (
        <>
        <div className="file-list">
            {
                files &&
                files.map(f => 	<FileCard
                        key={f.name + Math.random()}
                        file={f}
                        deleteFile={deleteFileHandler}
                    />)
            }
        </div>
        </>
    )
}

export default FileList