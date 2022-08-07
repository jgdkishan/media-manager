import axios from "axios";
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent
  } from '@chakra-ui/react'

import './uploadModal.css'

const UploadModal = ({files, setFiles, removeFile, isOpen, onClose}) => {
    const uploadHandler = (event) => {
        onClose()
        for (const file of event.target.files) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                file.imageUrl = fileReader.result;
              };
            fileReader.readAsDataURL(file);
            file.isUploading = true;
            setFiles([...files, file])
            const formData = new FormData();
            formData.append("file",file)
            formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
            axios.post('https://api.cloudinary.com/v1_1/kishanc/image/upload', formData, {folder: 'media-manager'})
            .then((res) => {
                file.isUploading = false;
                file.publicId = res.data?.public_id;
                setFiles([...files, file])
            })
            .catch((err) => {
                console.error(err)
                removeFile(file.name)
            })
        }
    }
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <div className="file-card">
                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler}/>
                    <button>
                        SELECT FILE
                    </button>
                </div>
                <p className="main">Supported Files</p>
                <p className="info">JPG, PNG, GIF</p>
            </div>
            </ModalContent>
        </Modal>
        </>
    )
}

export default UploadModal