import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from '@chakra-ui/react'

const MediaViewer = ({imageSrc, fileName, isOpen, onOpen, onClose}) => {
    return (
      <>  
        <Modal onClose={onClose} size='3xl' isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent bg='#181818'>
            <img src={imageSrc} alt={fileName} onClick={onClose} />
            <ModalHeader color='white'>{fileName}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default MediaViewer;